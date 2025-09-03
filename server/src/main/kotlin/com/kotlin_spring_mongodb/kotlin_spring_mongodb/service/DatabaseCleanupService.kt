package com.kotlin_spring_mongodb.kotlin_spring_mongodb.service

import mu.KotlinLogging
import org.springframework.boot.CommandLineRunner
import org.springframework.context.annotation.Profile
import org.springframework.stereotype.Service
import reactor.core.publisher.Mono

@Service
@Profile("cleanup")
class DatabaseCleanupService(
    private val contactService: ContactService,
    private val faqService: FaqService,
    private val featureService: FeatureService,
    private val highlightService: HighlightService,
    private val valueService: ValueService
) : CommandLineRunner {
    
    private val logger = KotlinLogging.logger {}
    
    override fun run(vararg args: String?) {
        logger.info { "Starting database cleanup..." }
        
        clearAllData()
            .doOnSuccess { logger.info { "Database cleanup completed successfully" } }
            .doOnError { error -> logger.error(error) { "Error during database cleanup" } }
            .subscribe()
    }
    
    private fun clearAllData(): Mono<Void> {
        return Mono.`when`(
            contactService.deleteAll(),
            faqService.deleteAll(),
            featureService.deleteAll(),
            highlightService.deleteAll(),
            valueService.deleteAll()
        )
    }
}
