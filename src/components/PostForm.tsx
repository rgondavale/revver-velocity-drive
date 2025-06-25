
import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Plus, X } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  slug: string;
}

interface Subcategory {
  id: string;
  name: string;
  slug: string;
  category_id: string;
}

interface PostFormProps {
  postId?: string;
  onSave?: () => void;
  onCancel?: () => void;
}

const PostForm: React.FC<PostFormProps> = ({ postId, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    heading: '',
    body: '',
    image_url: '',
    category_id: '',
    subcategory_id: '',
    target_page: '',
    reference_urls: [''],
    scheduled_for: ''
  });

  const [categories, setCategories] = useState<Category[]>([]);
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  const [filteredSubcategories, setFilteredSubcategories] = useState<Subcategory[]>([]);
  const [loading, setLoading] = useState(false);
  const [newCategory, setNewCategory] = useState('');
  const [newSubcategory, setNewSubcategory] = useState('');
  const { toast } = useToast();

  const availablePages = [
    'home', 'car-reviews', 'bike-reviews', 'car-launches', 
    'bike-launches', 'news', 'car-comparison', 'bike-comparison', 'reviews-blogs'
  ];

  useEffect(() => {
    fetchCategories();
    fetchSubcategories();
    if (postId) {
      fetchPost();
    }
  }, [postId]);

  useEffect(() => {
    if (formData.category_id) {
      setFilteredSubcategories(
        subcategories.filter(sub => sub.category_id === formData.category_id)
      );
    } else {
      setFilteredSubcategories([]);
    }
  }, [formData.category_id, subcategories]);

  const fetchCategories = async () => {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('name');
    
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      setCategories(data || []);
    }
  };

  const fetchSubcategories = async () => {
    const { data, error } = await supabase
      .from('subcategories')
      .select('*')
      .order('name');
    
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      setSubcategories(data || []);
    }
  };

  const fetchPost = async () => {
    if (!postId) return;
    
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('id', postId)
      .single();
    
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else if (data) {
      setFormData({
        heading: data.heading || '',
        body: data.body || '',
        image_url: data.image_url || '',
        category_id: data.category_id || '',
        subcategory_id: data.subcategory_id || '',
        target_page: data.target_page || '',
        reference_urls: data.reference_urls || [''],
        scheduled_for: data.scheduled_for ? data.scheduled_for.slice(0, 16) : ''
      });
    }
  };

  const addCategory = async () => {
    if (!newCategory.trim()) return;
    
    const slug = newCategory.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    
    const { data, error } = await supabase
      .from('categories')
      .insert([{ name: newCategory.trim(), slug }])
      .select()
      .single();
    
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      setCategories([...categories, data]);
      setNewCategory('');
      toast({ title: "Success", description: "Category added successfully!" });
    }
  };

  const addSubcategory = async () => {
    if (!newSubcategory.trim() || !formData.category_id) return;
    
    const slug = newSubcategory.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    
    const { data, error } = await supabase
      .from('subcategories')
      .insert([{ 
        name: newSubcategory.trim(), 
        slug, 
        category_id: formData.category_id 
      }])
      .select()
      .single();
    
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      setSubcategories([...subcategories, data]);
      setNewSubcategory('');
      toast({ title: "Success", description: "Subcategory added successfully!" });
    }
  };

  const addReferenceUrl = () => {
    setFormData({
      ...formData,
      reference_urls: [...formData.reference_urls, '']
    });
  };

  const removeReferenceUrl = (index: number) => {
    const urls = formData.reference_urls.filter((_, i) => i !== index);
    setFormData({ ...formData, reference_urls: urls });
  };

  const updateReferenceUrl = (index: number, value: string) => {
    const urls = [...formData.reference_urls];
    urls[index] = value;
    setFormData({ ...formData, reference_urls: urls });
  };

  const handleSave = async (status: 'draft' | 'published' | 'scheduled') => {
    if (!formData.heading.trim() || !formData.body.trim()) {
      toast({ title: "Error", description: "Heading and body are required.", variant: "destructive" });
      return;
    }

    if (status === 'published' && !formData.target_page) {
      toast({ title: "Error", description: "Please select a target page for publishing.", variant: "destructive" });
      return;
    }

    if (status === 'scheduled' && !formData.scheduled_for) {
      toast({ title: "Error", description: "Please select a schedule date and time.", variant: "destructive" });
      return;
    }

    setLoading(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('User not authenticated');

      const postData = {
        ...formData,
        reference_urls: formData.reference_urls.filter(url => url.trim()),
        status,
        ...(status === 'published' && {
          published_by: user.id,
          published_at: new Date().toISOString()
        }),
        ...(status === 'scheduled' && {
          scheduled_for: new Date(formData.scheduled_for).toISOString()
        })
      };

      if (postId) {
        const { error } = await supabase
          .from('posts')
          .update(postData)
          .eq('id', postId);
        
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('posts')
          .insert([{ ...postData, created_by: user.id }]);
        
        if (error) throw error;
      }

      toast({
        title: "Success!",
        description: `Post ${postId ? 'updated' : 'created'} successfully as ${status}.`,
      });

      if (onSave) onSave();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>{postId ? 'Edit Post' : 'Create New Post'}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <Label htmlFor="heading">Heading *</Label>
          <Input
            id="heading"
            value={formData.heading}
            onChange={(e) => setFormData({ ...formData, heading: e.target.value })}
            placeholder="Enter post heading"
          />
        </div>

        <div>
          <Label htmlFor="body">Body *</Label>
          <Textarea
            id="body"
            value={formData.body}
            onChange={(e) => setFormData({ ...formData, body: e.target.value })}
            placeholder="Enter post content"
            rows={10}
          />
        </div>

        <div>
          <Label htmlFor="image_url">Image URL</Label>
          <Input
            id="image_url"
            type="url"
            value={formData.image_url}
            onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>Category</Label>
            <Select
              value={formData.category_id}
              onValueChange={(value) => setFormData({ ...formData, category_id: value, subcategory_id: '' })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="flex gap-2 mt-2">
              <Input
                placeholder="New category name"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
              />
              <Button onClick={addCategory} size="sm" type="button">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div>
            <Label>Subcategory</Label>
            <Select
              value={formData.subcategory_id}
              onValueChange={(value) => setFormData({ ...formData, subcategory_id: value })}
              disabled={!formData.category_id}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select subcategory" />
              </SelectTrigger>
              <SelectContent>
                {filteredSubcategories.map((subcategory) => (
                  <SelectItem key={subcategory.id} value={subcategory.id}>
                    {subcategory.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="flex gap-2 mt-2">
              <Input
                placeholder="New subcategory name"
                value={newSubcategory}
                onChange={(e) => setNewSubcategory(e.target.value)}
                disabled={!formData.category_id}
              />
              <Button onClick={addSubcategory} size="sm" type="button" disabled={!formData.category_id}>
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div>
          <Label>Target Page (for publishing)</Label>
          <Select
            value={formData.target_page}
            onValueChange={(value) => setFormData({ ...formData, target_page: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select target page" />
            </SelectTrigger>
            <SelectContent>
              {availablePages.map((page) => (
                <SelectItem key={page} value={page}>
                  {page.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>Reference URLs (Optional)</Label>
          {formData.reference_urls.map((url, index) => (
            <div key={index} className="flex gap-2 mt-2">
              <Input
                type="url"
                value={url}
                onChange={(e) => updateReferenceUrl(index, e.target.value)}
                placeholder="https://example.com"
              />
              {formData.reference_urls.length > 1 && (
                <Button 
                  onClick={() => removeReferenceUrl(index)} 
                  size="sm" 
                  variant="outline"
                  type="button"
                >
                  <X className="w-4 h-4" />
                </Button>
              )}
            </div>
          ))}
          <Button onClick={addReferenceUrl} size="sm" variant="outline" className="mt-2" type="button">
            <Plus className="w-4 h-4 mr-2" /> Add Reference URL
          </Button>
        </div>

        <div>
          <Label htmlFor="scheduled_for">Schedule For (Optional)</Label>
          <Input
            id="scheduled_for"
            type="datetime-local"
            value={formData.scheduled_for}
            onChange={(e) => setFormData({ ...formData, scheduled_for: e.target.value })}
          />
        </div>

        <div className="flex gap-4 pt-4">
          <Button 
            onClick={() => handleSave('draft')} 
            variant="outline" 
            disabled={loading}
          >
            Save as Draft
          </Button>
          <Button 
            onClick={() => handleSave('published')} 
            disabled={loading}
          >
            Publish Now
          </Button>
          {formData.scheduled_for && (
            <Button 
              onClick={() => handleSave('scheduled')} 
              variant="secondary" 
              disabled={loading}
            >
              Schedule Post
            </Button>
          )}
          {onCancel && (
            <Button onClick={onCancel} variant="ghost">
              Cancel
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PostForm;
