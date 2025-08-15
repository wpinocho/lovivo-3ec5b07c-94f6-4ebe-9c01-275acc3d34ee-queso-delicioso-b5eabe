import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface CheeseFilterProps {
  selectedType: string | null;
  onTypeChange: (type: string | null) => void;
  selectedIntensity: number | null;
  onIntensityChange: (intensity: number | null) => void;
}

const CheeseFilter: React.FC<CheeseFilterProps> = ({
  selectedType,
  onTypeChange,
  selectedIntensity,
  onIntensityChange
}) => {
  const types = [
    { value: 'fresco', label: 'Fresco', color: 'bg-green-100 text-green-800' },
    { value: 'semicurado', label: 'Semicurado', color: 'bg-yellow-100 text-yellow-800' },
    { value: 'curado', label: 'Curado', color: 'bg-orange-100 text-orange-800' },
    { value: 'azul', label: 'Azul', color: 'bg-blue-100 text-blue-800' }
  ];

  const intensities = [1, 2, 3, 4, 5];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Filtros</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-medium mb-3">Tipo de Queso</h3>
          <div className="space-y-2">
            <Button
              variant={selectedType === null ? "default" : "outline"}
              size="sm"
              onClick={() => onTypeChange(null)}
              className="w-full justify-start"
            >
              Todos los tipos
            </Button>
            {types.map((type) => (
              <Button
                key={type.value}
                variant={selectedType === type.value ? "default" : "outline"}
                size="sm"
                onClick={() => onTypeChange(type.value)}
                className="w-full justify-start"
              >
                <Badge className={`mr-2 ${type.color}`}>
                  {type.label}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-3">Intensidad</h3>
          <div className="space-y-2">
            <Button
              variant={selectedIntensity === null ? "default" : "outline"}
              size="sm"
              onClick={() => onIntensityChange(null)}
              className="w-full justify-start"
            >
              Todas las intensidades
            </Button>
            {intensities.map((intensity) => (
              <Button
                key={intensity}
                variant={selectedIntensity === intensity ? "default" : "outline"}
                size="sm"
                onClick={() => onIntensityChange(intensity)}
                className="w-full justify-start"
              >
                Intensidad {intensity}/5
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CheeseFilter;