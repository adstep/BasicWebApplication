module App {
    class AppController {
        private title: string;
        private text1: string;
        private text2: string;

        constructor() {
            this.title = 'Bootstrap starter template';
            this.text1 = 'Use this document as a way to quickly start any new project.';
            this.text2 = 'All you get is this text and a mostly barebones HTML document.';
        }
    }

    angular
        .module('App', [])
        .controller('AppController', AppController);
}