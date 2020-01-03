$('[data-search]').on('keyup', function(){
    var searchVal = $(this).val();
    var filterItems = $('[data-filter-item]');

    if(searchVal != ''){
        filterItems.addClass('hidden');
        $('[data-filter-item][data-filter-name*="'+ 
            searchVal.toLowerCase()+ '"]').removeClass('hidden');

        }else {
            filterItems.removeClass('hidden');
        }


});