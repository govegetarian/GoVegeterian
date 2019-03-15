$(document).ready(function()
{
  if (localStorage.getItem('userPost') != null) {
        document.getElementById('my_post').innerHTML='<div class="review_auth1"><strong>Darkwing Duck\'s review</strong></div>' + localStorage.getItem('userPost') + '<div class="review_posted1"><strong>Posted </strong> Just Now</div>';
        $('#user_post').css('display', 'block');
  }

});
