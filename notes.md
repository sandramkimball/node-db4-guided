# Requirements

A client has hired you to track zoo animals.

For 'ZOOS':
- name
- adress

For 'ANIMALS':
- name
- species --> specie table
- resided zoos

For 'ANIMAL_ZOOS'
- date at zoo/s (from, to)
- zoo_id
- animal_id

For 'SPECIES':
- specie name
- 


Determine the db tables necessary to track this info.

Label any relationships between tables.

## A good data model is...
- captures ALL and ONLY info the system needs.
- reflect reality of the company.
- flexible, can evolve.
- guarantees `data integrity` without sacrificing too much performance.
- is driven by HOW we access data.

## Components
- entities(nouns: zoos, animals, species) like a resource --> map to tables.
- properties --> columns, fields.
- relationships --> foreign keys.

## Relationships
- One:One
    _one animal is only one specie._

- One:Many (most common)
    _one specie has many animals._

- Many:Many (smoke and mirrors)
    _zoos have many animals, and an animal could have been to many zoos._

## Workflow
- id entities
- id the relatinships
- id the properties

## Mantras
- every table must have a **Primary Key**.
- work on **two or three** entities at one time.
- **One to Many** relationships are modeled using a **Foreign Key**.
- the **Foreign Key** alays goes in the **many** table.
- the **Foreign Key** column must be the same type as **Primary Key** it references.
- a **Many:Many** is modeled using a **another (third) table**.













