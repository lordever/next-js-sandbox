import React from 'react';
import TelemetryImg from "@/assets/images/telemetry.jpg";
import NearYouImg from "@/assets/images/near-you.jpg";
import PaymentsImg from "@/assets/images/payments.jpg";
import HighlightItem from "@/components/highlight-item/highlight-item.component";

const Highlights = () => {
    return (
        <section className="flex flex-col gap-[120px] sm:gap-[128px] lg:gap-[160px] mt-[83px] sm:mt-[684px] md:px-[97px] lg:mt-[442px] lg:px-[165px]">
            <HighlightItem
                title="Easy to use riding telemetry"
                description="The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things all in an easy to use app."
                image={TelemetryImg}
                imageAlt="telemetry"
            />
            <HighlightItem
                title="Coming to a city near you"
                description="Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure to let us know if you want to see us in your hometown. We’re aiming to let our scooters loose on 23 cities over the coming year."
                image={NearYouImg}
                imageAlt="near-you"
                reverse
            />
            <HighlightItem
                title="Zero hassle payments"
                description="Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month."
                image={PaymentsImg}
                imageAlt="payments"
            />
        </section>
    );
};

export default Highlights;