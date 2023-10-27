(function() {
    document.addEventListener('DOMContentLoaded', function() {
        var inptSearch = document.getElementById('inpt_search');

        inptSearch.addEventListener('focus', function() {
            var label = this.parentElement.querySelector('label');
            if (label) {
                label.style.color = 'red';
            }
        });

        inptSearch.addEventListener('blur', function() {
            if (this.value.length === 0) {
                var label = this.parentElement.querySelector('label');
                if (label) {
                    label.style.color = ''; // Restore the default color
                }
            }
        });
    });
})();
