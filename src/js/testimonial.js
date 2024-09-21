const testimonials = [
    {
        name: "John Doe",
        position: "CEO, Acme Corp",
        image: "/src/images/testimonial1.jpg",
        avatar: "/src/images/avatar1.avif",
        service: "Manufacturing Service",
        quote: "Will Sparrow Technologies transformed our manufacturing process with their IoT solution. We've seen a 30% increase in efficiency since implementations."
    },
    {
        name: "Jane Smith",
        position: "CTO, Tech Innovators",
        image: "/src/images/testimonia2.jpg",
        avatar: "/src/images/avatar2.avif",
        service: "Software Development",
        quote: "The custom software solution provided by Will Sparrow Technologies has streamlined our operations significantly. Our productivity has improved by 40%."
    },
    {
        name: "Alex Johnson",
        position: "COO, Global Logistics",
        image: "/src/images/testimonial3.jpg",
        avatar: "/src/images/avatar3.avif",
        service: "Supply Chain Optimization",
        quote: "Will Sparrow's AI-driven supply chain solution has revolutionized our logistics. We've cut costs by 25% and improved delivery times by 35%."
    }
];

let currentIndex = 0;

function createTestimonialElement(testimonial) {
    return `
        <div class="flex-shrink-0 w-full">
            <div class="flex flex-col md:flex-row items-center justify-center p-8">
                <div class="w-full md:w-1/3 pr-0 md:pr-8 mb-8 md:mb-0">
                    <div class="relative flex items-center justify-center h-full">
                        <img src="${testimonial.image}" alt="Testimonial Image" 
                        class="
                            w-full 
                            max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 
                            h-auto 
                            object-cover 
                            rounded-tl-[300px] rounded-bl-[300px] rounded-tr-[300px] 
                            shadow-lg b
                            order border-gray-300 
                            p-2
                        ">
                    </div>
                </div>
                <div class="w-full md:w-2/3 pl-0 md:pl-8 pt-0 md:pt-10 flex flex-col items-center md:items-start">
                    <div class="relative p-8 flex flex-col items-center md:items-start">
                        <h3 class="text-2xl font-semibold mb-4 text-primary text-center md:text-left">${testimonial.service}</h3>
                        <p class="text-gray-700 mb-6 text-lg leading-loose text-center md:text-left">
                            "${testimonial.quote}"
                        </p>
                        <div class="flex flex-col md:flex-row items-center justify-between w-full mt-4 relative">
                            <div class="flex items-center space-x-4 md:space-x-6 mb-4 md:mb-0">
                                <div class="bg-white rounded-full shadow-md overflow-hidden w-14 h-14 md:w-16 md:h-16">
                                    <img src="${testimonial.avatar}" alt="Avatar" class="w-full h-full object-cover">
                                </div>
                                
                                <div class="text-center md:text-left">
                                    <p class="font-semibold text-lg md:text-xl">${testimonial.name}</p>
                                    <p class="text-sm text-gray-500">${testimonial.position}</p>
                                </div>
                            </div>

                            <div class="hidden md:block flex-grow mx-6 border-t border-gray-400"></div>

                            <div id="testimonialSlider" class="arrow-container flex space-x-3 md:space-x-4">
                                <div class="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-400 hover:bg-primary flex items-center justify-center cursor-pointer shadow-lg transition-transform hover:scale-110 prevButton">
                                    <i class="fas fa-long-arrow-alt-left text-white text-lg md:text-xl"></i>
                                </div>
                                <div class="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-400 hover:bg-primary flex items-center justify-center cursor-pointer shadow-lg transition-transform hover:scale-110 nextButton">
                                    <i class="fas fa-long-arrow-alt-right text-white text-lg md:text-xl"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function updateTestimonial() {
    const wrapper = document.getElementById('testimonialWrapper');
    wrapper.innerHTML = createTestimonialElement(testimonials[currentIndex]);
    
    document.querySelector('.prevButton').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        updateTestimonial();
    });

    document.querySelector('.nextButton').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateTestimonial();
    });
}

document.addEventListener('DOMContentLoaded', updateTestimonial);
