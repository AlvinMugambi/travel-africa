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
      'https://res.cloudinary.com/alvomugz/image/upload/v1697699335/Peace_and_quiet_2_lmj1qh.png',
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
      'https://res.cloudinary.com/alvomugz/image/upload/v1697699693/More_than_4_ostjd4.png',
  },
};

export const getTravelorType = (selectedReasons) => {
  if (selectedReasons.length >= 3) {
    return {type: 'The diverse traveller', images: [travelorType.diverseTravelor]};
  }
  if (selectedReasons.length === 1) {
    if (selectedReasons[0] === 'The restaurant(s)') {
      return {type: 'The foodie traveller', images: [travelorType.foodieTravelor]};
    }
    if (selectedReasons[0] === 'The activities') {
      return {type: 'The busybee traveller', images: [travelorType.busybeeTravelor]};
    }
    if (selectedReasons[0] === 'peace and quiet') {
      return {type: 'The Peaceful traveller', images: [travelorType.peacefulTravelor]};
    }
    if (selectedReasons[0] === 'relaxed environment') {
      return {type: 'The Zen traveller', images: [travelorType.zenTravelor]};
    }
    if (selectedReasons[0] === 'accomodation') {
      return {type: 'The boujee traveller', images: [travelorType.boujeeTravelor]};
    }
    if (selectedReasons[0] === 'nightlife') {
      return {type: 'The nightlife traveller', images: [travelorType.whoohooTravelor]};
    }
    if (selectedReasons[0] === 'close to the beach') {
      return {type: 'The beach traveller', images: [travelorType.beachTravelor]};
    }
    if (selectedReasons[0] === 'in nature') {
      return {type: 'The nature traveller', images: [travelorType.natureTravelor]};
    }
  }
  if (selectedReasons.includes('The restaurant(s)')) {
    if (selectedReasons.includes('The activities')) {
      return {type: 'The foodie and busybee traveller', images: [travelorType.foodieTravelor, travelorType.busybeeTravelor]};
    }
    if (selectedReasons.includes('accomodation')) {
      return {type: 'The foodie and boujee traveller', images: [travelorType.foodieTravelor, travelorType.boujeeTravelor]};
    }
    if (selectedReasons.includes('peace and quiet')) {
      return {type: 'The foodie and peaceful traveller', images: [travelorType.foodieTravelor, travelorType.peacefulTravelor]};
    }
    if (selectedReasons.includes('relaxed environment')) {
      return {type: 'The foodie and zen traveller', images: [travelorType.foodieTravelor, travelorType.zenTravelor]};
    }
    if (selectedReasons.includes('nightlife')) {
      return {type: 'The foodie and nightlife traveller', images: [travelorType.foodieTravelor, travelorType.whoohooTravelor]};
    }
    if (selectedReasons.includes('close to the beach')) {
      return {type: 'The foodie and beach traveller', images: [travelorType.foodieTravelor, travelorType.beachTravelor]};
    }
    if (selectedReasons.includes('in nature')) {
      return {type: 'The foodie and nature traveller', images: [travelorType.foodieTravelor, travelorType.natureTravelor]};
    }
  }
  if (selectedReasons.includes('The activities')) {
    if (selectedReasons.includes('accomodation')) {
      return {type: 'The busybee and boujee traveller', images: [travelorType.busybeeTravelor, travelorType.boujeeTravelor]};
    }
    if (selectedReasons.includes('peace and quiet')) {
      return {type: 'The busybee and peaceful traveller', images: [travelorType.busybeeTravelor, travelorType.peacefulTravelor]};
    }
    if (selectedReasons.includes('relaxed environment')) {
      return {type: 'The busybee and zen traveller', images: [travelorType.busybeeTravelor, travelorType.zenTravelor]};
    }
    if (selectedReasons.includes('nightlife')) {
      return {type: 'The busybee and nightlife traveller', images: [travelorType.busybeeTravelor, travelorType.whoohooTravelor]};
    }
    if (selectedReasons.includes('close to the beach')) {
      return {type: 'The busybee and beach traveller', images: [travelorType.busybeeTravelor, travelorType.beachTravelor]};
    }
    if (selectedReasons.includes('in nature')) {
      return {type: 'The busybee and nature traveller', images: [travelorType.busybeeTravelor, travelorType.natureTravelor]};
    }
  }
  if (selectedReasons.includes('accomodation')) {
    if (selectedReasons.includes('peace and quiet')) {
      return {type: 'The boujee and peaceful traveller', images: [travelorType.boujeeTravelor, travelorType.peacefulTravelor]};
    }
    if (selectedReasons.includes('relaxed environment')) {
      return {type: 'The boujee and zen traveller', images: [travelorType.boujeeTravelor, travelorType.zenTravelor]};
    }
    if (selectedReasons.includes('nightlife')) {
      return {type: 'The boujee and nightlife traveller', images: [travelorType.boujeeTravelor, travelorType.whoohooTravelor]};
    }
    if (selectedReasons.includes('close to the beach')) {
      return {type: 'The boujee and beach traveller', images: [travelorType.boujeeTravelor, travelorType.beachTravelor]};
    }
    if (selectedReasons.includes('in nature')) {
      return {type: 'The boujee and nature traveller', images: [travelorType.boujeeTravelor, travelorType.natureTravelor]};
    }
  }
  if (selectedReasons.includes('peace and quiet')) {
    if (selectedReasons.includes('relaxed environment')) {
      return {type: 'The peaceful and zen traveller', images: [travelorType.peacefulTravelor, travelorType.zenTravelor]};
    }
    if (selectedReasons.includes('nightlife')) {
      return {type: 'The peaceful and nightlide traveller', images: [travelorType.peacefulTravelor, travelorType.whoohooTravelor]};
    }
    if (selectedReasons.includes('close to the beach')) {
      return {type: 'The peaceful and beach traveller', images: [travelorType.peacefulTravelor, travelorType.beachTravelor]};
    }
    if (selectedReasons.includes('in nature')) {
      return {type: 'The peaceful and nature traveller', images: [travelorType.peacefulTravelor, travelorType.natureTravelor]};
    }
  }
  if (selectedReasons.includes('relaxed environment')) {
    if (selectedReasons.includes('nightlife')) {
      return {type: 'The zen and nightlife traveller', images: [travelorType.zenTravelor, travelorType.whoohooTravelor]};
    }
    if (selectedReasons.includes('close to the beach')) {
      return {type: 'The zen and beach traveller', images: [travelorType.zenTravelor, travelorType.beachTravelor]};
    }
    if (selectedReasons.includes('in nature')) {
      return {type: 'The zen and nature traveller', images: [travelorType.zenTravelor, travelorType.natureTravelor]};
    }
  }
  if (selectedReasons.includes('nightlife')) {
    if (selectedReasons.includes('close to the beach')) {
      return {type: 'The nightlife and beach traveller', images: [travelorType.whoohooTravelor, travelorType.beachTravelor]};
    }
    if (selectedReasons.includes('in nature')) {
      return {type: 'The nightlife and nature traveller', images: [travelorType.whoohooTravelor, travelorType.natureTravelor]};
    }
  }
  if (selectedReasons.includes('close to the beach')) {
    if (selectedReasons.includes('in nature')) {
      return {type: 'The beach and nature traveller', images: [travelorType.beachTravelor, travelorType.natureTravelor]};
    }
  }
};
