var disqus_shortname = 'betterjavadocexample';

(function() {
    div = document.createElement('div');
    div.setAttribute('id', 'disqus_thread');
    document.body.appendChild(div);
})();

(function() {
    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
})();
