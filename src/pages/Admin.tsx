
import React, { useState } from 'react';
import AdminLayout from '@/components/AdminLayout';
import PostForm from '@/components/PostForm';
import PostsList from '@/components/PostsList';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const Admin = () => {
  const [currentView, setCurrentView] = useState<'list' | 'create' | 'edit'>('list');
  const [editingPostId, setEditingPostId] = useState<string | null>(null);
  const [refreshList, setRefreshList] = useState(0);

  const handleCreateNew = () => {
    setCurrentView('create');
    setEditingPostId(null);
  };

  const handleEdit = (postId: string) => {
    setCurrentView('edit');
    setEditingPostId(postId);
  };

  const handleSave = () => {
    setCurrentView('list');
    setEditingPostId(null);
    setRefreshList(prev => prev + 1);
  };

  const handleCancel = () => {
    setCurrentView('list');
    setEditingPostId(null);
  };

  return (
    <AdminLayout>
      <div className="px-4 py-6">
        {currentView === 'list' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Posts Management</h2>
              <Button onClick={handleCreateNew}>
                <Plus className="w-4 h-4 mr-2" />
                Create New Post
              </Button>
            </div>
            <PostsList 
              onEdit={handleEdit} 
              refresh={refreshList}
            />
          </div>
        )}
        
        {(currentView === 'create' || currentView === 'edit') && (
          <div>
            <div className="mb-6">
              <Button 
                onClick={handleCancel} 
                variant="outline" 
                className="mb-4"
              >
                ← Back to Posts
              </Button>
            </div>
            <PostForm
              postId={editingPostId || undefined}
              onSave={handleSave}
              onCancel={handleCancel}
            />
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default Admin;
