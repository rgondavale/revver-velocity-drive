
import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Edit, Trash2, Eye, Calendar } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface Post {
  id: string;
  heading: string;
  body: string;
  status: string;
  target_page: string;
  created_at: string;
  published_at: string | null;
  scheduled_for: string | null;
  categories: { name: string } | null;
  subcategories: { name: string } | null;
}

interface PostsListProps {
  onEdit: (postId: string) => void;
  refresh: number;
}

const PostsList: React.FC<PostsListProps> = ({ onEdit, refresh }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchPosts();
  }, [refresh]);

  const fetchPosts = async () => {
    setLoading(true);
    
    const { data, error } = await supabase
      .from('posts')
      .select(`
        *,
        categories:category_id(name),
        subcategories:subcategory_id(name)
      `)
      .order('created_at', { ascending: false });
    
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      setPosts(data || []);
    }
    
    setLoading(false);
  };

  const deletePost = async (postId: string) => {
    const { error } = await supabase
      .from('posts')
      .delete()
      .eq('id', postId);
    
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Success", description: "Post deleted successfully!" });
      fetchPosts();
    }
  };

  const updatePostStatus = async (postId: string, status: string) => {
    const updateData: any = { status };
    
    if (status === 'published') {
      const { data: { user } } = await supabase.auth.getUser();
      updateData.published_by = user?.id;
      updateData.published_at = new Date().toISOString();
    }
    
    const { error } = await supabase
      .from('posts')
      .update(updateData)
      .eq('id', postId);
    
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Success", description: `Post ${status} successfully!` });
      fetchPosts();
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800';
      case 'scheduled': return 'bg-blue-100 text-blue-800';
      case 'draft': return 'bg-gray-100 text-gray-800';
      case 'unpublished': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return <div className="text-center py-8">Loading posts...</div>;
  }

  return (
    <div className="space-y-4">
      {posts.length === 0 ? (
        <Card>
          <CardContent className="text-center py-8">
            <p className="text-gray-500">No posts found. Create your first post!</p>
          </CardContent>
        </Card>
      ) : (
        posts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <CardTitle className="text-lg">{post.heading}</CardTitle>
                  <div className="flex gap-2 mt-2">
                    <Badge className={getStatusColor(post.status)}>
                      {post.status}
                    </Badge>
                    {post.categories && (
                      <Badge variant="outline">{post.categories.name}</Badge>
                    )}
                    {post.subcategories && (
                      <Badge variant="outline">{post.subcategories.name}</Badge>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    Created: {new Date(post.created_at).toLocaleDateString()}
                    {post.published_at && (
                      <span className="ml-4">
                        Published: {new Date(post.published_at).toLocaleDateString()}
                      </span>
                    )}
                    {post.scheduled_for && (
                      <span className="ml-4">
                        Scheduled: {new Date(post.scheduled_for).toLocaleString()}
                      </span>
                    )}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => setSelectedPost(post)}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>{selectedPost?.heading}</DialogTitle>
                        <DialogDescription>
                          Preview of the post content
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        {selectedPost?.image_url && (
                          <img 
                            src={selectedPost.image_url} 
                            alt="Post" 
                            className="w-full h-48 object-cover rounded"
                          />
                        )}
                        <div className="prose max-w-none">
                          <p className="whitespace-pre-wrap">{selectedPost?.body}</p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => onEdit(post.id)}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  
                  {post.status === 'draft' && (
                    <Button 
                      size="sm"
                      onClick={() => updatePostStatus(post.id, 'published')}
                    >
                      Publish
                    </Button>
                  )}
                  
                  {post.status === 'published' && (
                    <Button 
                      size="sm" 
                      variant="secondary"
                      onClick={() => updatePostStatus(post.id, 'unpublished')}
                    >
                      Unpublish
                    </Button>
                  )}
                  
                  {post.status === 'unpublished' && (
                    <Button 
                      size="sm"
                      onClick={() => updatePostStatus(post.id, 'published')}
                    >
                      Republish
                    </Button>
                  )}
                  
                  <Button 
                    size="sm" 
                    variant="destructive"
                    onClick={() => {
                      if (confirm('Are you sure you want to delete this post?')) {
                        deletePost(post.id);
                      }
                    }}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 line-clamp-3">
                {post.body.substring(0, 200)}...
              </p>
              {post.target_page && (
                <p className="text-sm text-gray-500 mt-2">
                  Target Page: {post.target_page}
                </p>
              )}
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
};

export default PostsList;
