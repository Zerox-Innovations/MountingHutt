import React from 'react'

const Experience = () => {
  return (
    <div>
      <section class=" bg-white sm:py-16 lg:py-20">
        <div class=" mx-auto sm:px-6  max-w-7xl">
          <div>
            <h1>Popular Experiences</h1>
            <p>Browse exciting, adventurous and fun-filled activities for your holiday.</p>
          </div>
          <div class="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4">
            <div class="relative group">
              <div class="overflow-hidden aspect-w-1 aspect-h-1">
                <img
                  class="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
                  src="https://i.pinimg.com/736x/bb/89/73/bb89734671fbd7b0c8eaf29ca2126565.jpg"
                  alt="MANALI Package"
                />
              </div>
              <div class="flex items-start justify-between mt-2 space-x-4">
                <div>
                  <h3 class="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                    MANALI
                    <span class="absolute inset-0" aria-hidden="true"></span>
                  </h3>
                </div>
              </div>
            </div>
            <div class="relative group">
              <div class="overflow-hidden aspect-w-1 aspect-h-1">
                <img
                  class="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
                  src="https://i.pinimg.com/236x/b9/a2/0f/b9a20f4446f44479bd272fb49d6baa99.jpg"
                  alt="MANALI Package"
                />
              </div>
              <div class="flex items-start justify-between mt-2 space-x-4">
                <div>
                  <h3 class="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                    DAL LAKE SUNSET SHIKARA RIDE
                    <span class="absolute inset-0" aria-hidden="true"></span>
                  </h3>
                </div>
              </div>
            </div>
            <div class="relative group">
              <div class="overflow-hidden aspect-w-1 aspect-h-1">
                <img
                  class="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
                  src="https://i.pinimg.com/236x/5d/ca/24/5dca24ee90cbad489e7e9ef00913b23b.jpg"
                  alt="MANALI Package"
                />
              </div>
              <div class="flex items-start justify-between mt-2 space-x-4">
                <div>
                  <h3 class="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                    LADAKH
                    <span class="absolute inset-0" aria-hidden="true"></span>
                  </h3>
                </div>
              </div>
            </div>
            <div class="relative group">
              <div class="overflow-hidden aspect-w-1 aspect-h-1">
                <img
                  class="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
                  src="https://i.pinimg.com/236x/96/f4/fc/96f4fcde95229c15fbca897573a92d62.jpg"
                  alt="MANALI Package"
                />
              </div>
              <div class="flex items-start justify-between mt-2 space-x-4">
                <div>
                  <h3 class="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                    KASOL
                    <span class="absolute inset-0" aria-hidden="true"></span>
                  </h3>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section >

    </div >
  )
}

export default Experience