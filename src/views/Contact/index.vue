<template>
    <InnerPageHero image-url="/images/image-4.jpg" title="Contact Us" />

    <div class="container mx-auto py-8 sm:py-12">
        <div class="grid sm:grid-cols-3 sm:gap-4 px-4 sm:px-0">
            <div><span class="text-gray-500">Adress:</span> Lorem Ipsum</div>
            <div><span class="text-gray-500">Phone:</span> +0987654321</div>
            <div><span class="text-gray-500">Email:</span> info@laratipsofficial.com</div>
        </div>

        <div class="mt-8 sm:mt-16 grid sm:grid-cols-2 gap-8 sm:gap-12">
            <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198740.92178677957!2d-77.17903906575317!3d38.89363915109864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c6de5af6e45b%3A0xc2524522d4885d2a!2sWashington%2C%20D.C.%2C%20Distrito%20de%20Columbia%2C%20EUA!5e0!3m2!1spt-PT!2sbr!4v1723045427743!5m2!1spt-PT!2sbr"
                    class="w-full" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <form class="p-8 bg-gray-300 shadow rounded space-y-4">
                <div>
                    <input type="text" placeholder="Enter Name"
                        class="px-4 py-2 w-full border focus:border-primary focus:outline-none rounded bg-gray-200"
                        required>
                    <!--- <span class="text-red-600 text-sm">The error message</span> -->
                </div>
                <div>
                    <input type="email" placeholder="Enter Email"
                        class="px-4 py-2 w-full border focus:border-primary focus:outline-none rounded bg-gray-200"
                        required>
                <!-- <span class="text-red-600 text-sm">The error message</span> -->
                </div>
                <div>
                    <input type="phone" placeholder="Phone Number"
                        class="px-4 py-2 w-full border focus:border-primary focus:outline-none rounded bg-gray-200"
                        required>
                <!-- <span class="text-red-600 text-sm">The error message</span> -->
                </div>

                <div>
                    <textarea placeholder="Enter Message" class="px-4 py-2 w-full border focus:border-primary focus:outline-none rounded bg-gray-200" rows="5" required></textarea>
                <!-- <span class="text-red-600 text-sm">The error message</span> -->
                </div>

            <!--    <div class="px-4 py-2 bg-red-600 text-white rounded">
                        Lorem ipsum dolor sit amet consectetur.
                    </div> -->

            <!--    <div class="px-4 py-2 bg-green-600 text-white rounded">
                        Lorem ipsum dolor sit amet consectetur.
                    </div> -->

                <button class="px-4 py-2 sm:px-6 bg-primary text-white rounded focus:outline-none">Submit</button>
            </form>
            
        </div>
    </div>
</template>

<script>
import InnerPageHero from '@/components/InnerPageHero';

export default {
    components: {
        InnerPageHero,
    },


    setup() {


        return {}
    },
}
</script>