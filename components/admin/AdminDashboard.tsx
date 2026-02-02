import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getPropertiesCount } from '@/utils/propertyManager';
import { Building2, DollarSign, Home, TrendingUp, Plus } from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    total: 0,
    forSale: 0,
    forRent: 0,
    sold: 0,
    rented: 0,
  });

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      setLoading(true);
      try {
        const next = await getPropertiesCount();
        if (mounted) setStats(next);
      } finally {
        if (mounted) setLoading(false);
      }
    };
    void load();
    return () => {
      mounted = false;
    };
  }, []);

  const statCards = [
    {
      title: 'Total Propiedades',
      value: stats.total,
      icon: Building2,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'En Venta',
      value: stats.forSale,
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      title: 'En Alquiler',
      value: stats.forRent,
      icon: Home,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      title: 'Vendidas/Alquiladas',
      value: stats.sold + stats.rented,
      icon: TrendingUp,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Resumen de propiedades</p>
        </div>
        <Button onClick={() => navigate('/admin/properties/new')}>
          <Plus className="mr-2 h-4 w-4" />
          Nueva Propiedad
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{loading ? '—' : stat.value}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Acciones Rápidas</CardTitle>
            <CardDescription>Gestiona tus propiedades rápidamente</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button 
              variant="outline" 
              className="w-full justify-start"
              onClick={() => navigate('/admin/properties')}
            >
              <Building2 className="mr-2 h-4 w-4" />
              Ver Todas las Propiedades
            </Button>
            <Button 
              variant="outline" 
              className="w-full justify-start"
              onClick={() => navigate('/admin/properties/new')}
            >
              <Plus className="mr-2 h-4 w-4" />
              Crear Nueva Propiedad
            </Button>
            <Button 
              variant="outline" 
              className="w-full justify-start"
              onClick={() => navigate('/admin/export')}
            >
              <DollarSign className="mr-2 h-4 w-4" />
              Exportar Cambios
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Información</CardTitle>
            <CardDescription>Estado del sistema</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Propiedades activas:</span>
                <span className="font-semibold">{stats.forSale + stats.forRent}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Propiedades vendidas:</span>
                <span className="font-semibold">{stats.sold}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Propiedades alquiladas:</span>
                <span className="font-semibold">{stats.rented}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

