'use strict';

angular.module('podcastsApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.awesomeThings = [];

    $scope.shows = [
      { 
        "img": "",
        "name": "The Combat Jack Show",
        "url": "http://thecombatjackshow.com/category/show/",
        "description": "The undisputed #1 HipHop podcast, the Combat Jack Show features interviews with HipHop icons & the most in-depth conversations about music, news, culture & race. Listen to Russell Simmons, Chuck D, Damon Dash, Rza, Scarface, D-Nice and more share personal stories and talk exclusively about their journeys, philosophies and viewpoints."
      },
      { 
        "img": "",
        "name": "The Black Guy Who Tips", 
        "url": "http://www.theblackguywhotips.com/category/podcast-episodes/", 
        "description": "The Black Guy Who Tips is a podcast / blog from the minds of Rod and Karen a married couple who enjoy ratchetness." 
      },
      {
        "img": "",
        "name": "The Read",
        "url": "https://soundcloud.com/theread",
        "description": "Join bloggers Kid Fury and Crissle for their weekly podcast covering hip-hop and pop culture's most trying stars. Throwing shade and spilling tea with a flippant and humorous attitude, no star is safe from Fury and Crissle unless their name is Beyoncé. (Or Blue Ivy.)"
      },
      {
        "img": "",
        "name": "Mr. Moody's Neighborhood",
        "url": "http://www.mynextdoorneighbor.net/page/mr-moodys-neighborhood-podcast",
        "description": "Next Door Neighbor Ent. presents 'MR.MOODY'SGHBORHOOD!' What's a next door neighbor? A next door neighbor is where you can go and let your hair down, kick off your shoes, grab a brew and chill! No need to watch your mouth or worry about being judged or being pretentious."
      },
      {
        "img": "",
        "name": "The Beige Phillip Show",
        "url": "http://beigephillip.com/episodes/",
        "description": "Restoring male and female sex roles to a healthier and happier state. Continuing the movement started by Patrice O'Neal (R.I.P.), and Dante Nero of The Black Phillip Show. With the passing of the late Patrice O'Neal, Dante has revived the show with the support and request of the Black Phillip audience and has brought in co-hosts Mara Marek and Harry Terjanian for relationship and comical support! RiotCast.com"
      },
      {
        "img": "",
        "name": "In Deep Show",
        "url": "http://indeepshow.podbean.com/2014/04/07/in-deep-show/",
        "description": "The In Deep Show are Brian \"Big B\" Muir, \"Big\" Lee Harris, and Mark \"The Doc\" Wiley. Time to time we get together and have some of the best conversations imagiable. So we decided to share it with the world."
      },
      {
        "img": "",
        "name": "Black is Online",
        "url": "http://www.blackisonline.com/category/podcast/",
        "description": "Home of Culture Connection, Brothers Lehman Sports Happy Hour, and Black Is Break podcasts."
      },
      {
        "img": "",
        "name": "Go In Radio",
        "url": "http://goinradio.com",
        "description": "Great music, honest talk and occasional humor. Interviews too. An unpredictable passion project from someone who cares too much."
      },
      {
        "img": "",
        "name": "The Music Snobs",
        "url": "https://soundcloud.com/themusicsnobs",
        "description": "THE MUSIC SNOBS is the podcast where Scoop, Isaac, Jehan, and Arthur discuss, debate, and deconstruct the music and musicians who both fascinate and frustrate them."
      },
      {
        "img": "",
        "name": "Desus Vs Mero",
        "url": "http://www.complex.com/tv/shows/desus-vs-mero",
        "description": "The Bronx bullies bring their internationally acclaimed #DesusVsMero podcast to video with even more educated ignorance, knowledge darts, and RNS."
      },
      {
        "img": "",
        "name": "Girl On Guy",
        "url": "http://girlonguy.net/podcast/",
        "description": "girl on guy is a show about art, culture, booze, comedy, family, physical injuries, psychological bruises, action movies, rock music, ninjas, zombies, failure, success, sacrifice, video games, and blowing shit up. it includes the weekly installment of self-inflicted wounds, the end of show apologia, a few big ideas and a surfeit of curse words."
      },
      {
        "img": "",
        "name": "This Week In Blackness",
        "url": "http://thisweekinblackness.com/",
        "description": "This Week in Blackness Radio | #TWIBRADIO (previously Blacking It Up) is the award winning Monday - Thursday online radio series (syndicated in Washington, DC - 1480 AM at 9pm) featuring TWIB! creator Elon James White, NY1 Contributor L. Joy Williams and Premiere Straight Man Aaron Rand Freeman. Previous guests have included Dr. Melissa Harris-Perry, Tim Wise, James Rucker, Dr. Michael Eric Dyson, Van Jones, Ben Jealous, Howard Dean, Joan Walsh, Dr. Blair Kelley, Jasiri X, Baratunde Thurston and more."
      },
      {
        "img": "",
        "name": "The Nappy Afro",
        "url": "http://www.nappyafro.com/category/podcasts/",
        "description": "The nappyafro.com staff talk about professional wrestling."
      },
      {
        "img": "",
        "name": "Straight Outta LoCash",
        "url": "http://straightolc.podbean.com/",
        "description": "A network of shows that talks about sports, life, politics, comic books, film, and hip hop with a comedic twist. Weekly special guests including comedians, music artists, models, and bloggers. Great music provided by DJ Reminise. Hosted by award winning writer Darryl Frierson, Theodore Simpson, and comedian Jovan Bibbs."
      },
      {
        "img": "",
        "name": "Mr. No Good",
        "url": "http://www.mrnogood.com/",
        "description": "THE Podcast of a Complaining Jackass....I sit and drink, smoke, and talk shit in an entertaining way."
      },
      {
        "img": "",
        "name": "The Ink",
        "url": "http://nignorance.podomatic.com/",
        "description": "This show is based outlook of 3 friends on what we consider ignorant shit.....designed to make you laugh and will definitely make you think about ignorant acts before they are committed."
      },
      {
        "img": "",
        "name": "His and Hers",
        "url": "http://sports.espn.go.com/espnradio/podcast/archive?id=8898044",
        "description": "Michael Smith and Jemele Hill use their skill and personality to delve into a variety of topics from many different angles."
      }
    ];


    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  });
