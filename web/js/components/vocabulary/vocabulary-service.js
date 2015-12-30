export default class VocabularyService {
    constructor($http) {
        this.$http = $http;
    }

    add(vocabulary) {
        return this.$http.post('/api/vocabularies', vocabulary);
    }

    getList() {
        return this.$http.get('/api/vocabularies');
    }
}
