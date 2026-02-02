import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { AdminProtectedRoute } from '@/components/admin/AdminProtectedRoute';
import { AdminDashboard } from '@/components/admin/AdminDashboard';
import { PropertiesList } from '@/components/admin/PropertiesList';
import { PropertyForm } from '@/components/admin/PropertyForm';
import { ExportPanel } from '@/components/admin/ExportPanel';

export const AdminPage: React.FC = () => {
  return (
    <AdminProtectedRoute>
      <AdminLayout>
        <Routes>
          <Route index element={<AdminDashboard />} />
          <Route path="properties" element={<PropertiesList />} />
          <Route path="properties/new" element={<PropertyForm />} />
          <Route path="properties/:id" element={<PropertyForm />} />
          <Route path="export" element={<ExportPanel />} />
          <Route path="*" element={<Navigate to="/admin" replace />} />
        </Routes>
      </AdminLayout>
    </AdminProtectedRoute>
  );
};

