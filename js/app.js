$(function () {
    $('.example-popover').popover({
      container: 'body'
    })
  })

  $('a.share').click(function(e){
    e.preventDefault();
    var $link   = $(this);
    var href    = $link.attr('href');
    var network = $link.attr('data-network');
   
    var networks = {
      facebook : { width : 600, height : 300 },
      google   : { width : 515, height : 490 },
   
    };
   
    var popup = function(network){
      var options = 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,';
      window.open(href, '', options+'height='+networks[network].height+',width='+networks[network].width);
    }
   
    popup(network);
  });
  