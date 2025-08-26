package com.kotlin_spring_mongodb.kotlin_spring_mongodb.service

import com.kotlin_spring_mongodb.kotlin_spring_mongodb.model.*
import mu.KotlinLogging
import org.springframework.boot.CommandLineRunner
import org.springframework.stereotype.Service
import reactor.core.publisher.Flux

@Service
class DataInitializationService(
    private val contactService: ContactService,
    private val faqService: FaqService,
    private val featureService: FeatureService,
    private val highlightService: HighlightService,
    private val valueService: ValueService
) : CommandLineRunner {
    
    private val logger = KotlinLogging.logger {}
    
    override fun run(vararg args: String?) {
        logger.info { "Initializing test data..." }
        
        // Initialize contacts
        initializeContacts()
        
        // Initialize FAQs
        initializeFaqs()
        
        // Initialize features
        initializeFeatures()
        
        // Initialize highlights
        initializeHighlights()
        
        // Initialize values
        initializeValues()
        
        logger.info { "Data initialization completed" }
    }
    
    private fun initializeContacts() {
        val contacts = listOf(
            Contact(position = "General Manager", location = "Jakarta, Indonesia"),
            Contact(position = "UI/UX Designer", location = "Yokohama, Japan"),
            Contact(position = "Blog Content Copywriter", location = "New York, United States"),
            Contact(position = "Graphic Designer", location = "New York, United States"),
            Contact(position = "Fleet Supervisor", location = "Jakarta, Indonesia"),
            Contact(position = "UX Analyst", location = "London, United Kingdom")
        )
        
        Flux.fromIterable(contacts)
            .flatMap { contactService.createContact(it) }
            .subscribe(
                { contact -> logger.info { "Created contact: ${contact.position} in ${contact.location}" } },
                { error -> logger.error(error) { "Error creating contacts" } }
            )
    }
    
    private fun initializeFaqs() {
        val faqs = listOf(
            Faq(
                category = "How it works",
                items = listOf(
                    FaqItem(title = "How do I download the app?", description = "To download the Scoot app, you can search \"Scoot\" in both the App and Google Play stores. An SMS will be sent to your phone with a link to download the Scoot app."),
                    FaqItem(title = "Can I find a nearby Scoots?", description = "Definitely! Simply open up the app and allow us to find your location while using it. We'll show you all of the closest Scoots and some extra useful information."),
                    FaqItem(title = "Do I need a license to ride?", description = "Yup! We provide information inside the app regarding local laws and the license you need to be able to ride our Scoots.")
                )
            ),
            Faq(
                category = "Safe driving",
                items = listOf(
                    FaqItem(title = "Should I wear a helmet?", description = "Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting."),
                    FaqItem(title = "How about the rules & regulations?", description = "Now is not the time to be a rule breaker. Be sure you're complying with all local laws and regulations. Also, just a heads up: we are actively monitoring cities, and if the rules change, so do we."),
                    FaqItem(title = "What if I damage my Scoot?", description = "Be sure to read our terms and conditions carefully. Not the most fun job we know but we make it as clear as possible. There's an option to add insurance for each trip, or you can sign up for annual insurance if you're a regular Scooter.")
                )
            )
        )
        
        Flux.fromIterable(faqs)
            .flatMap { faqService.createFaq(it) }
            .subscribe(
                { faq -> logger.info { "Created FAQ for category: ${faq.category}" } },
                { error -> logger.error(error) { "Error creating FAQs" } }
            )
    }
    
    private fun initializeFeatures() {
        val features = listOf(
            Feature(
                title = "Easy to use riding telemetry",
                description = "The Scoot app is available with riding telemetry. This means it can show you your average speed, how long you've been using the scooter, your traveling distance, and many more things you would want to track.",
                imagePath = "/images/telemetry.jpg"
            ),
            Feature(
                title = "Coming to a city near you",
                description = "Scoot is available in 4 major cities so far. We're expanding rapidly, so be sure to let us know if you want to see us in your hometown. We're aiming to let our scooters loose on 23 cities over the coming year.",
                imagePath = "/images/near-you.jpg"
            ),
            Feature(
                title = "Zero hassle payments",
                description = "Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month.",
                imagePath = "/images/payments.jpg"
            )
        )
        
        Flux.fromIterable(features)
            .flatMap { featureService.createFeature(it) }
            .subscribe(
                { feature -> logger.info { "Created feature: ${feature.title}" } },
                { error -> logger.error(error) { "Error creating features" } }
            )
    }
    
    private fun initializeHighlights() {
        val highlights = listOf(
            Highlight(
                home = listOf(
                    HighlightItem(
                        title = "Locate with app",
                        description = "Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.",
                        imagePath = "/images/locate.svg",
                        imageAlt = "Locate with app"
                    ),
                    HighlightItem(
                        title = "Pick your scooter",
                        description = "We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost.",
                        imagePath = "/images/scooter.svg",
                        imageAlt = "Pick your scooter"
                    ),
                    HighlightItem(
                        title = "Enjoy the ride",
                        description = "Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you're off! Always lock bikes away from walkways and accessibility ramps.",
                        imagePath = "/images/ride.svg",
                        imageAlt = "Enjoy the ride"
                    )
                ),
                about = listOf(
                    HighlightItem(
                        title = "Mobility for the digital era",
                        description = "Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips.",
                        imagePath = "/images/digital-era.jpg",
                        imageAlt = "Digital era"
                    ),
                    HighlightItem(
                        title = "Better urban living",
                        description = "We're helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride.",
                        imagePath = "/images/better-living.jpg",
                        imageAlt = "Better urban living"
                    )
                ),
                careers = listOf(
                    HighlightItem(
                        title = "Our tech",
                        description = "We're using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!",
                        imagePath = "/images/our-tech.jpg",
                        imageAlt = "Our tech"
                    ),
                    HighlightItem(
                        title = "Our integrity",
                        description = "We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.",
                        imagePath = "/images/our-integrity.jpg",
                        imageAlt = "Our integrity"
                    )
                )
            )
        )
        
        Flux.fromIterable(highlights)
            .flatMap { highlightService.createHighlight(it) }
            .subscribe(
                { highlight -> logger.info { "Created highlight" } },
                { error -> logger.error(error) { "Error creating highlights" } }
            )
    }
    
    private fun initializeValues() {
        val values = listOf(
            Value(
                title = "Our tech",
                description = "We're using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!",
                imagePath = "/images/our-tech.jpg",
                imageAlt = "Our tech"
            ),
            Value(
                title = "Our integrity",
                description = "We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.",
                imagePath = "/images/our-integrity.jpg",
                imageAlt = "Our integrity"
            ),
            Value(
                title = "Community",
                description = "We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.",
                imagePath = "/images/our-community.jpg",
                imageAlt = "Community"
            )
        )
        
        Flux.fromIterable(values)
            .flatMap { valueService.createValue(it) }
            .subscribe(
                { value -> logger.info { "Created value: ${value.title}" } },
                { error -> logger.error(error) { "Error creating values" } }
            )
    }
}
