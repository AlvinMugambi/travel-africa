const travelorType = {
    foodieTravelor: {
        image: require('./assets/img/TravellerTypes/restaurants.png')
    },
    busybeeTravelor: {
        image: require('./assets/img/TravellerTypes/activities.png')
    },
    peacefulTravelor: {
        image: require('./assets/img/TravellerTypes/activities.png')
    },
    zenTravelor: {
        image: require('./assets/img/TravellerTypes/Relaxedenvironment.png')
    },
    boujeeTravelor: {
        image: require('./assets/img/TravellerTypes/accomodation.png')
    },
    whoohooTravelor: {
        image: require('./assets/img/TravellerTypes/nightlife.png')
    },
    beachTravelor: {
        image: require('./assets/img/TravellerTypes/beach.png')
    },
    natureTravelor: {
        image: require('./assets/img/TravellerTypes/nature.png')
    },
    diverseTravelor: {
        image: require('./assets/img/TravellerTypes/Morethan4.png')
    },
}

export const getTravelorType = (selectedReasons) => {
    if(selectedReasons.length >= 3) {
        return [travelorType.diverseTravelor]
    }
    if (selectedReasons.length === 1) {
        if (selectedReasons[0] === 'The restaurant(s)') {
            return [travelorType.foodieTravelor]
        }
        if (selectedReasons[0] === 'The activities') {
            return [travelorType.busybeeTravelor]
        }
        if (selectedReasons[0] === 'peace and quiet') {
            return [travelorType.peacefulTravelor]
        }
        if (selectedReasons[0] === 'relaxed environment') {
            return [travelorType.zenTravelor]
        }
        if (selectedReasons[0] === 'accomodation') {
            return [travelorType.boujeeTravelor]
        }
        if (selectedReasons[0] === 'nightlife') {
            return [travelorType.whoohooTravelor]
        }
        if (selectedReasons[0] === 'close to the beach') {
            return [travelorType.beachTravelor]
        }
        if (selectedReasons[0] === 'in nature') {
            return [travelorType.natureTravelor]
        }
    }
    if (selectedReasons.includes('The restaurant(s)')){
        if(selectedReasons.includes('The activities')){
            return [travelorType.foodieTravelor, travelorType.busybeeTravelor]
        }
        if (selectedReasons.includes('accomodation')) {
            return [travelorType.foodieTravelor, travelorType.boujeeTravelor]
        }
        if (selectedReasons.includes('peace and quiet')) {
            return [travelorType.foodieTravelor, travelorType.peacefulTravelor]
        }
        if (selectedReasons.includes('relaxed environment')) {
            return [travelorType.foodieTravelor, travelorType.zenTravelor]
        }
        if (selectedReasons.includes('nightlife')) {
            return [travelorType.foodieTravelor, travelorType.whoohooTravelor]
        }
        if (selectedReasons.includes('close to the beach')) {
            return [travelorType.foodieTravelor, travelorType.beachTravelor]
        }
        if (selectedReasons.includes('in nature')) {
            return [travelorType.foodieTravelor, travelorType.natureTravelor]
        }
    }
    if (selectedReasons.includes('The activities')){
        if (selectedReasons.includes('accomodation')) {
            return [travelorType.busybeeTravelor, travelorType.boujeeTravelor]
        }
        if (selectedReasons.includes('peace and quiet')) {
            return [travelorType.busybeeTravelor, travelorType.peacefulTravelor]
        }
        if (selectedReasons.includes('relaxed environment')) {
            return [travelorType.busybeeTravelor, travelorType.zenTravelor]
        }
        if (selectedReasons.includes('nightlife')) {
            return [travelorType.busybeeTravelor, travelorType.whoohooTravelor]
        }
        if (selectedReasons.includes('close to the beach')) {
            return [travelorType.busybeeTravelor, travelorType.beachTravelor]
        }
        if (selectedReasons.includes('in nature')) {
            return [travelorType.busybeeTravelor, travelorType.natureTravelor]
        }
    }
    if (selectedReasons.includes('accomodation')){
        if (selectedReasons.includes('peace and quiet')) {
            return [travelorType.boujeeTravelor, travelorType.peacefulTravelor]
        }
        if (selectedReasons.includes('relaxed environment')) {
            return [travelorType.boujeeTravelor, travelorType.zenTravelor]
        }
        if (selectedReasons.includes('nightlife')) {
            return [travelorType.boujeeTravelor, travelorType.whoohooTravelor]
        }
        if (selectedReasons.includes('close to the beach')) {
            return [travelorType.boujeeTravelor, travelorType.beachTravelor]
        }
        if (selectedReasons.includes('in nature')) {
            return [travelorType.boujeeTravelor, travelorType.natureTravelor]
        }
    }
    if (selectedReasons.includes('peace and quiet')){
        if (selectedReasons.includes('relaxed environment')) {
            return [travelorType.peacefulTravelor, travelorType.zenTravelor]
        }
        if (selectedReasons.includes('nightlife')) {
            return [travelorType.peacefulTravelor, travelorType.whoohooTravelor]
        }
        if (selectedReasons.includes('close to the beach')) {
            return [travelorType.peacefulTravelor, travelorType.beachTravelor]
        }
        if (selectedReasons.includes('in nature')) {
            return [travelorType.peacefulTravelor, travelorType.natureTravelor]
        }
    }
    if (selectedReasons.includes('relaxed environment')){
        if (selectedReasons.includes('nightlife')) {
            return [travelorType.zenTravelor, travelorType.whoohooTravelor]
        }
        if (selectedReasons.includes('close to the beach')) {
            return [travelorType.zenTravelor, travelorType.beachTravelor]
        }
        if (selectedReasons.includes('in nature')) {
            return [travelorType.zenTravelor, travelorType.natureTravelor]
        }
    }
    if (selectedReasons.includes('nightlife')){
        if (selectedReasons.includes('close to the beach')) {
            return [travelorType.whoohooTravelor, travelorType.beachTravelor]
        }
        if (selectedReasons.includes('in nature')) {
            return [travelorType.whoohooTravelor, travelorType.natureTravelor]
        }
    }
    if (selectedReasons.includes('close to the beach')){
        if (selectedReasons.includes('in nature')) {
            return [travelorType.beachTravelor, travelorType.natureTravelor]
        }
    }
}