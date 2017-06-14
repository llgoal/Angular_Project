'use strict';

eventsApp.controller('EventController',
	function EventController($scope) {
	    $scope.event = {
	        name: 'Angular Boot Camp',
	        date: Date.now(),
	        location: {
	            address: 'Dundas Office',
	            city: 'Toronto',
	            province: 'ON'
	        },
	        imageUrl: '/img/angularjs-logo.png',
	        sessions: [
                {
                    name: 'Directives Masterclass',
                    creatorName: 'Bob Smith',
                    duration: '1 hr',
                    level: 'Advanced',
                    abstract: 'In this session you will learn the ins and outs of directives',
                    upVoteCount: 0
                },
                {
                    name: 'Scopes for fun and profit',
                    creatorName: 'John Doe',
	                duration: '30 Mins',
	                level: 'Introductory',
	                abstract: 'This session will take a closer look at scopes',
	                upVoteCount: 0
                },
                {
                    name: 'Well Behaved Controllers',
                    creatorName: 'Jane Doe',
                    duration: '2 hours',
                    level: 'Intermediate',
                    abstract: 'Controllers are the beginning of everything Angular does. Learn how to craft controllers that will win the respect of your friends and neighbors.',
                    upVoteCount: 0
                }
			]
	    }

	    $scope.upVoteSession = function (session) {
	        session.upVoteCount++;
	    }

	    $scope.downVoteSession = function (session) {
	        if(session.upVoteCount > 0) {
	            session.upVoteCount--;
	        }
	    }
	}
);