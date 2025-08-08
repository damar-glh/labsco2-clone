import { Button } from '@/components/ui/button'

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-bg-primary flex items-center justify-center relative overflow-hidden">
      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-28 flex items-center justify-between w-full">
        
        {/* Left Content */}
        <div className="flex-1 max-w-2xl">
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6">
            Where Code Meets{' '}
            <span className="bg-slate-800 text-white px-4 py-2 inline-block transform -rotate-1">
              Creativity
            </span>
          </h1>
          
          <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
            Harnessing the power of our Coding Collective to build solutions for your business needs.
          </p>
          
          <Button 
            variant="default"
            className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 text-lg font-medium rounded-md transition-all hover:scale-105 shadow-lg">
            Get a free consult
          </Button>
        </div>

        {/* Right Content - 3D Image Container */}
        <div className="flex-1 flex justify-end items-center relative">
          <div className="relative">
            {/* 3D Container Background */}
            <div className="w-96 h-96 lg:w-[500px] lg:h-[500px] relative">
              {/* 3D Shape Background */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 rounded-3xl transform rotate-12 shadow-2xl"
                style={{
                  clipPath: 'polygon(0 0, 85% 0, 100% 15%, 100% 100%, 15% 100%, 0 85%)'
                }}>
              </div>
              
              {/* Secondary 3D Layer */}
              <div 
                className="absolute inset-4 bg-gradient-to-br from-slate-600 to-slate-800 rounded-2xl transform rotate-6 shadow-xl opacity-80"
                style={{
                  clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0 100%)'
                }}>
              </div>
              
              {/* Image Container */}
              <div className="absolute inset-8 bg-white rounded-2xl shadow-2xl overflow-hidden transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=400&fit=crop&crop=faces"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500 rounded-full shadow-lg animate-bounce"></div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-green-500 rounded-full shadow-lg animate-pulse"></div>
              <div className="absolute top-1/2 -right-8 w-6 h-6 bg-yellow-500 rounded-full shadow-lg animate-ping"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-100 rounded-full opacity-50 animate-float"></div>
      <div className="absolute bottom-32 right-32 w-24 h-24 bg-purple-100 rounded-full opacity-40 animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-green-100 rounded-full opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
    </div>
  )
}

export default Home