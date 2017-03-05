'use strict';

TimelineController.$inject = ['$scope', 'dataService'];

function TimelineController($scope, dataService) {
    $scope.blogGroup1 = [
        { id: 1, title: 'This is a blog ablout lorem ipsum', category: 'iot', date: '12 february 2016' },
        { id: 2, title: 'This is a blog ablout lorem ipsum', category: 'iot', date: '12 february 2016' },
        { id: 3, title: 'This is a blog ablout lorem ipsum', category: 'iot', date: '12 february 2016' },
        { id: 4, title: 'This is a blog ablout lorem ipsum', category: 'iot', date: '12 february 2016' },
    ];
    $scope.blogGroup2 = [
        { id: 5, title: 'This is a blog ablout lorem ipsum', category: 'iot', date: '12 february 2016' },
        { id: 6, title: 'This is a blog ablout lorem ipsum', category: 'iot', date: '12 february 2016' },
        { id: 7, title: 'This is a blog ablout lorem ipsum', category: 'iot', date: '12 february 2016' },
        { id: 8, title: 'This is a blog ablout lorem ipsum', category: 'iot', date: '12 february 2016' },
    ];
    $scope.blogGroup3 = [
        { id: 9, title: 'This is a blog ablout lorem ipsum', category: 'iot', date: '12 february 2016' },
        { id: 10, title: 'This is a blog ablout lorem ipsum', category: 'iot', date: '12 february 2016' },
        { id: 11, title: 'This is a blog ablout lorem ipsum', category: 'iot', date: '12 february 2016' },
        { id: 12, title: 'This is a blog ablout lorem ipsum', category: 'iot', date: '12 february 2016' },
    ];
    $scope.blogGroup4 = [
        { id: 13, title: 'This is a blog ablout lorem ipsum', category: 'iot', date: '12 february 2016' },
        { id: 14, title: 'This is a blog ablout lorem ipsum', category: 'iot', date: '12 february 2016' },
        { id: 15, title: 'This is a blog ablout lorem ipsum', category: 'iot', date: '12 february 2016' },
        { id: 16, title: 'This is a blog ablout lorem ipsum', category: 'iot', date: '12 february 2016' },
    ];

    

}

module.exports = TimelineController;