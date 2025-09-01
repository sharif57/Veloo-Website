'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Plus, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { use, useState } from 'react';

export default function AddSupplier() {
    const router= useRouter()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [materials, setMaterials] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  // Handle material selection
  const toggleMaterial = (material: string) => {
    setMaterials((prev) =>
      prev.includes(material)
        ? prev.filter((m) => m !== material)
        : [...prev, material]
    );
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log({ name, email, materials });
      setLoading(false);
      // Reset form after success
      setName('');
      setEmail('');
      setMaterials([]);
    }, 1000);
  };

  return (
    <div className=" bg-white rounded-lg p-4 md:p-6">
      <div className="container mx-auto bg-white rounded-lg ">
        <div className="p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-semibold text-gray-700 py-6  bg-[#ECFDF5] px-4 rounded-t-lg mb-10">
            Add New Supplier
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-lg font-semibold text-gray-700">
                  Supplier Name
                </Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-600 h-5 w-5" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter the name of the supplier"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-12 h-12 bg-gray-50 border-gray-300 rounded-lg text-gray-700 placeholder:text-gray-400 focus:bg-white focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100 transition-all duration-200"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-lg font-semibold text-gray-700">
                  Supplier Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-600 h-5 w-5" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter the email of the supplier"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-12 h-12 bg-gray-50 border-gray-300 rounded-lg text-gray-700 placeholder:text-gray-400 focus:bg-white focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100 transition-all duration-200"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="materials" className="text-lg font-semibold text-gray-700">
                  Materials Supplied
                </Label>
                <Input
                  id="materials"
                  type="text"
                  placeholder="Enter the types of materials the supplier provides"
                  value={materials.join(', ')}
                  readOnly
                  className="pl-4 h-12 bg-gray-50 border-gray-300 rounded-lg text-gray-700 placeholder:text-gray-400 focus:bg-white focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100 transition-all duration-200"
                />
                <div className="flex flex-wrap gap-2 mt-2">
                  {['Wires', 'Electrical Outlets', 'Switches', 'Circuit Breakers', 'Conduit'].map((material) => (
                    <Button
                      key={material}
                      type="button"
                      onClick={() => toggleMaterial(material)}
                      className={`bg-[#D1FAE5] text-[#047857] text-sm md:text-base font-semibold px-3 py-2 rounded-lg hover:bg-[#D1FAE5] transition-colors duration-200 flex items-center gap-1 ${
                        materials.includes(material) ? 'bg-emerald-200' : ''
                      }`}
                    >
                      {material}
                      <X className="h-4 w-4" />
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-6 mt-8">
              <Button
                type="button"
                onClick={() => {
                  setName('');
                  setEmail('');
                  setMaterials([]);
                  router.back();
                }}
                className="bg-[#D1FAE5] w-[180px] text-[#047857] py-6 cursor-pointer rounded-lg hover:bg-[#059669] hover:text-white transition-colors duration-200 flex items-center justify-center"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={loading}
                className="bg-[#059669] w-[180px] text-white py-6 rounded-lg hover:bg-emerald-700 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Plus className="h-5 w-5" />
                {loading ? 'Adding...' : 'Add Supplier'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}