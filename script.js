var share_button = document.getElementById('shareBtn')
var mobile_share_button = document.getElementById('mobileShareBtn')
var desktop_share_wrapper = document.getElementsByClassName('desktop-share-drawer')[0]
var mobile_share_wrapper = document.getElementsByClassName('mobile-share-drawer')[0]

share_button.addEventListener('click', function(e){
    desktop_share_wrapper.classList.toggle('hide')
    share_button.classList.toggle('active')
})
mobile_share_button.addEventListener('click', function(e){
    mobile_share_wrapper.classList.toggle('hide')
})

