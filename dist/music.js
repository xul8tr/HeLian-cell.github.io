const ap = new APlayer({
    container: document.getElementById('player'),
    fixed: true, //吸底模式
    autoplay: true, //默认是否自动播放
    theme: '#e6d0b2',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.4, //默认音量
    mutex: true, //是否不允许多个播放器同时播放
    listFolded: true, //是否默认收起播放列表
    listMaxHeight: 90, //播放列表的高度
    audio: [
        {
            name: '前前世世',
            artist: 'RADWIMPS',
            url: 'Hexo/source/resources/music/yourname.mp3',
            cover: 'Hexo/source/resources/music/yourname.jpg',
            lrc: 'Hexo/source/resources/music/yourname.lrc',
        },
        {
            name: '光年之外',
            artist: '邓紫棋',
            url: 'http://music.163.com/song/media/outer/url?id=449818741.mp3',
            cover: 'http://p1.music.126.net/fkqFqMaEt0CzxYS-0NpCog==/18587244069235039.jpg',
            lrc: '/./dist/music/lrc/449818741.lrc',
        }
    ]
});