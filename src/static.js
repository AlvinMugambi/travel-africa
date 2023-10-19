const travelorType = {
  foodieTravelor: {
    image:
      'https://res.cloudinary.com/alvomugz/image/upload/v1697699295/restaurants_h0ztis.png',
  },
  busybeeTravelor: {
    image:
      'https://res.cloudinary.com/alvomugz/image/upload/v1697699359/activities_t5cwhz.png',
  },
  peacefulTravelor: {
    image:
      'https://res.cloudinary.com/alvomugz/image/upload/v1697699266/Relaxed_environment_vps0a6.png',
  },
  zenTravelor: {
    image:
      'https://res.cloudinary.com/alvomugz/image/upload/v1697699693/More_than_4_ostjd4.png',
  },
  boujeeTravelor: {
    image:
      'https://res.cloudinary.com/alvomugz/image/upload/v1697699315/accomodation_2_wpfhxx.png',
  },
  whoohooTravelor: {
    image:
      'https://res.cloudinary.com/alvomugz/image/upload/v1697699280/nightlife_aqgqp9.png',
  },
  beachTravelor: {
    image:
      'https://res.cloudinary.com/alvomugz/image/upload/v1697699326/beach_2_oob4zj.png',
  },
  natureTravelor: {
    image:
      'https://res.cloudinary.com/alvomugz/image/upload/v1697699600/nature_2_ijk902.png',
  },
  diverseTravelor: {
    image:
      'https://res.cloudinary.com/alvomugz/image/upload/v1697686614/More_than_4_csxmq5.png',
  },
};

export const getTravelorType = (selectedReasons) => {
  if (selectedReasons.length >= 3) {
    return [travelorType.diverseTravelor];
  }
  if (selectedReasons.length === 1) {
    if (selectedReasons[0] === 'The restaurant(s)') {
      return [travelorType.foodieTravelor];
    }
    if (selectedReasons[0] === 'The activities') {
      return [travelorType.busybeeTravelor];
    }
    if (selectedReasons[0] === 'peace and quiet') {
      return [travelorType.peacefulTravelor];
    }
    if (selectedReasons[0] === 'relaxed environment') {
      return [travelorType.zenTravelor];
    }
    if (selectedReasons[0] === 'accomodation') {
      return [travelorType.boujeeTravelor];
    }
    if (selectedReasons[0] === 'nightlife') {
      return [travelorType.whoohooTravelor];
    }
    if (selectedReasons[0] === 'close to the beach') {
      return [travelorType.beachTravelor];
    }
    if (selectedReasons[0] === 'in nature') {
      return [travelorType.natureTravelor];
    }
  }
  if (selectedReasons.includes('The restaurant(s)')) {
    if (selectedReasons.includes('The activities')) {
      return [travelorType.foodieTravelor, travelorType.busybeeTravelor];
    }
    if (selectedReasons.includes('accomodation')) {
      return [travelorType.foodieTravelor, travelorType.boujeeTravelor];
    }
    if (selectedReasons.includes('peace and quiet')) {
      return [travelorType.foodieTravelor, travelorType.peacefulTravelor];
    }
    if (selectedReasons.includes('relaxed environment')) {
      return [travelorType.foodieTravelor, travelorType.zenTravelor];
    }
    if (selectedReasons.includes('nightlife')) {
      return [travelorType.foodieTravelor, travelorType.whoohooTravelor];
    }
    if (selectedReasons.includes('close to the beach')) {
      return [travelorType.foodieTravelor, travelorType.beachTravelor];
    }
    if (selectedReasons.includes('in nature')) {
      return [travelorType.foodieTravelor, travelorType.natureTravelor];
    }
  }
  if (selectedReasons.includes('The activities')) {
    if (selectedReasons.includes('accomodation')) {
      return [travelorType.busybeeTravelor, travelorType.boujeeTravelor];
    }
    if (selectedReasons.includes('peace and quiet')) {
      return [travelorType.busybeeTravelor, travelorType.peacefulTravelor];
    }
    if (selectedReasons.includes('relaxed environment')) {
      return [travelorType.busybeeTravelor, travelorType.zenTravelor];
    }
    if (selectedReasons.includes('nightlife')) {
      return [travelorType.busybeeTravelor, travelorType.whoohooTravelor];
    }
    if (selectedReasons.includes('close to the beach')) {
      return [travelorType.busybeeTravelor, travelorType.beachTravelor];
    }
    if (selectedReasons.includes('in nature')) {
      return [travelorType.busybeeTravelor, travelorType.natureTravelor];
    }
  }
  if (selectedReasons.includes('accomodation')) {
    if (selectedReasons.includes('peace and quiet')) {
      return [travelorType.boujeeTravelor, travelorType.peacefulTravelor];
    }
    if (selectedReasons.includes('relaxed environment')) {
      return [travelorType.boujeeTravelor, travelorType.zenTravelor];
    }
    if (selectedReasons.includes('nightlife')) {
      return [travelorType.boujeeTravelor, travelorType.whoohooTravelor];
    }
    if (selectedReasons.includes('close to the beach')) {
      return [travelorType.boujeeTravelor, travelorType.beachTravelor];
    }
    if (selectedReasons.includes('in nature')) {
      return [travelorType.boujeeTravelor, travelorType.natureTravelor];
    }
  }
  if (selectedReasons.includes('peace and quiet')) {
    if (selectedReasons.includes('relaxed environment')) {
      return [travelorType.peacefulTravelor, travelorType.zenTravelor];
    }
    if (selectedReasons.includes('nightlife')) {
      return [travelorType.peacefulTravelor, travelorType.whoohooTravelor];
    }
    if (selectedReasons.includes('close to the beach')) {
      return [travelorType.peacefulTravelor, travelorType.beachTravelor];
    }
    if (selectedReasons.includes('in nature')) {
      return [travelorType.peacefulTravelor, travelorType.natureTravelor];
    }
  }
  if (selectedReasons.includes('relaxed environment')) {
    if (selectedReasons.includes('nightlife')) {
      return [travelorType.zenTravelor, travelorType.whoohooTravelor];
    }
    if (selectedReasons.includes('close to the beach')) {
      return [travelorType.zenTravelor, travelorType.beachTravelor];
    }
    if (selectedReasons.includes('in nature')) {
      return [travelorType.zenTravelor, travelorType.natureTravelor];
    }
  }
  if (selectedReasons.includes('nightlife')) {
    if (selectedReasons.includes('close to the beach')) {
      return [travelorType.whoohooTravelor, travelorType.beachTravelor];
    }
    if (selectedReasons.includes('in nature')) {
      return [travelorType.whoohooTravelor, travelorType.natureTravelor];
    }
  }
  if (selectedReasons.includes('close to the beach')) {
    if (selectedReasons.includes('in nature')) {
      return [travelorType.beachTravelor, travelorType.natureTravelor];
    }
  }
};
