import React, { useState } from 'react';
import { Store, Upload, ShoppingBag, BarChart3, Users, Radio, Palette, MessageSquare, Settings, Plus, ExternalLink, Package, Search, Filter, ArrowUpDown, Truck, DollarSign, Tag, Percent, Clock, AlertCircle } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('merchandise');
  const [filterView, setFilterView] = useState(false);
  const [sortBy, setSortBy] = useState('newest');
  
  const sidebarItems = [
    { icon: BarChart3, label: 'Home', id: 'home' },
    { icon: Radio, label: 'Performance Analytics', id: 'analytics' },
    { icon: Palette, label: 'Music Management', id: 'music' },
    { icon: Store, label: 'Merchandise', id: 'merchandise' },
    { icon: Users, label: 'Community', id: 'community' },
    { icon: Settings, label: 'Settings', id: 'settings' },
  ];

  const shopIntegrations = [
    { name: 'Shopify', connected: true, orders: 125, revenue: 3750 },
    { name: 'Instagram Shop', connected: false, orders: 0, revenue: 0 },
    { name: 'TikTok Shop', connected: false, orders: 0, revenue: 0 },
    { name: 'Printify', connected: true, orders: 89, revenue: 2225 },
    { name: 'Printful', connected: false, orders: 0, revenue: 0 },
  ];

  const products = [
    {
      name: 'Limited Edition Vinyl',
      price: 29.99,
      stock: 50,
      sales: 75,
      status: 'In Stock',
      image: 'https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?auto=format&fit=crop&w=300',
      tags: ['Limited Edition', 'Vinyl'],
      lastOrdered: '2024-02-15'
    },
    {
      name: 'Tour T-Shirt 2024',
      price: 24.99,
      stock: 100,
      sales: 250,
      status: 'Low Stock',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=300',
      tags: ['Apparel', 'Tour Merch'],
      lastOrdered: '2024-02-20'
    },
    {
      name: 'Exclusive Album Bundle',
      price: 49.99,
      stock: 25,
      sales: 150,
      status: 'Pre-order',
      image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&w=300',
      tags: ['Bundle', 'Limited Edition'],
      lastOrdered: '2024-02-18'
    }
  ];

  const stats = [
    { icon: DollarSign, label: 'Total Revenue', value: '$6,825.50', change: '+12.5%' },
    { icon: ShoppingBag, label: 'Total Orders', value: '285', change: '+8.2%' },
    { icon: Package, label: 'Products Sold', value: '475', change: '+15.3%' },
    { icon: Truck, label: 'Pending Shipments', value: '24', change: '-2.1%' }
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white flex">
      {/* Sidebar */}
      <div className="w-64 bg-[#1A1A1A] p-4">
        <div className="mb-8">
          <div className="text-2xl font-bold">𝄢</div>
        </div>
        <nav>
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 p-3 rounded-lg mb-2 ${
                activeTab === item.id ? 'bg-[#2A2A2A]' : 'hover:bg-[#2A2A2A]'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Merchandise Management</h1>
          <div className="flex space-x-4">
            <button className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg">
              <Upload className="w-4 h-4" />
              <span>Upload Product</span>
            </button>
            <button className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg">
              <ShoppingBag className="w-4 h-4" />
              <span>Go Live</span>
            </button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-[#1A1A1A] p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <stat.icon className="w-5 h-5 text-gray-400" />
                <span className={`text-sm ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                  {stat.change}
                </span>
              </div>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Shop Integrations */}
        <div className="bg-[#1A1A1A] p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Shop Integrations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {shopIntegrations.map((shop) => (
              <div key={shop.name} className="bg-[#2A2A2A] p-4 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <Store className="w-5 h-5" />
                    <span>{shop.name}</span>
                  </div>
                  <button
                    className={`px-3 py-1 rounded ${
                      shop.connected
                        ? 'bg-green-600 hover:bg-green-700'
                        : 'bg-[#404040] hover:bg-[#505050]'
                    }`}
                  >
                    {shop.connected ? 'Connected' : 'Connect'}
                  </button>
                </div>
                {shop.connected && (
                  <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                    <div className="text-gray-400">
                      Orders: <span className="text-white">{shop.orders}</span>
                    </div>
                    <div className="text-gray-400">
                      Revenue: <span className="text-green-500">${shop.revenue}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Products Section */}
        <div className="bg-[#1A1A1A] p-6 rounded-lg">
          <div className="flex flex-col space-y-4 mb-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Your Products</h2>
              <button className="flex items-center space-x-2 bg-[#2A2A2A] hover:bg-[#3A3A3A] px-4 py-2 rounded-lg">
                <Plus className="w-4 h-4" />
                <span>Add New Product</span>
              </button>
            </div>
            
            {/* Search and Filters */}
            <div className="flex items-center space-x-4">
              <div className="flex-1 relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full bg-[#2A2A2A] rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
              <button
                onClick={() => setFilterView(!filterView)}
                className="flex items-center space-x-2 bg-[#2A2A2A] px-4 py-2 rounded-lg hover:bg-[#3A3A3A]"
              >
                <Filter className="w-4 h-4" />
                <span>Filters</span>
              </button>
              <div className="relative">
                <button className="flex items-center space-x-2 bg-[#2A2A2A] px-4 py-2 rounded-lg hover:bg-[#3A3A3A]">
                  <ArrowUpDown className="w-4 h-4" />
                  <span>Sort</span>
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.name} className="bg-[#2A2A2A] rounded-lg overflow-hidden">
                <div className="relative">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                  {product.status === 'Low Stock' && (
                    <div className="absolute top-2 right-2 bg-yellow-500 text-black px-2 py-1 rounded text-xs font-medium">
                      Low Stock
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold">{product.name}</h3>
                    <span className="text-green-500 font-medium">${product.price}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {product.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-[#404040] px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-400 mb-3">
                    <div>Stock: {product.stock}</div>
                    <div>Sales: {product.sales}</div>
                    <div>Status: {product.status}</div>
                    <div>Last Order: {product.lastOrdered}</div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-[#404040] hover:bg-[#505050] py-2 rounded">Edit</button>
                    <button className="flex items-center justify-center bg-[#404040] hover:bg-[#505050] p-2 rounded">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;