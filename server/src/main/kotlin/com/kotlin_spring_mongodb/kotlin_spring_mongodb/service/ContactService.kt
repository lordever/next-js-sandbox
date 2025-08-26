package com.kotlin_spring_mongodb.kotlin_spring_mongodb.service

import com.kotlin_spring_mongodb.kotlin_spring_mongodb.model.Contact
import com.kotlin_spring_mongodb.kotlin_spring_mongodb.repository.ContactRepository
import org.springframework.stereotype.Service
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono

@Service
class ContactService(private val contactRepository: ContactRepository) {
    
    fun getAllContacts(): Flux<Contact> = contactRepository.findAll()
    
    fun getContactById(id: String): Mono<Contact> = contactRepository.findById(id)
    
    fun createContact(contact: Contact): Mono<Contact> = contactRepository.save(contact)
    
    fun updateContact(id: String, contact: Contact): Mono<Contact> = 
        contactRepository.findById(id)
            .flatMap { contactRepository.save(contact.copy(id = id)) }
    
    fun deleteContact(id: String): Mono<Void> = contactRepository.deleteById(id)
}
