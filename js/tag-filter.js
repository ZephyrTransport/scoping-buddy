let all_tags = [];

$( document ).ready(function() {

  // call the tag related functions only if tag is present and tag is not "all"
  if(tag !== undefined && tag !== "all"){

    // color selected tags

    // unselect if it is already selected
    $('.project-tag-selected').toggleClass('project-tag-selected');

    //if it has the tag, select it
    //$('.label.' + tag).addClass('project-tag-selected');

    // filter articles by tag

    //    default, hide everything
    $('article').hide();


    console.log('selected tags:', selected_tags);

    selected_tags.forEach(
      function(tag) {
        console.log('tag:', tag);
            $('article.'+tag).show();
      }
    );





    //     if the tag is in
    // $('article').each(function(){
    //  if ( tagPresent(tag, this) ){
    //    $(this).show();
    //  }
    //});
  }
});

// get the tag from url
const urlParams = new URLSearchParams(window.location.search);
var tag    = urlParams.get('tag');
var agency = urlParams.get('agency');
var selected_tags = [tag];

// check if tag in the url is present in the article class
var tagPresent = function(param_tag, article){
  if ($.inArray(param_tag, $(article).attr('class').split(' ')) > -1){
    return true;
  }
};


var setTags = function(unique_tags){
    all_tags = all_tags.concat(unique_tags);
    console.log('UNIQUE Tags: '+ unique_tags);
}

var setAgencies = function(unique_agencies){
    all_tags = all_tags.concat(unique_agencies);
    console.log('UNIQUE Agencies: '+ unique_agencies);
}
