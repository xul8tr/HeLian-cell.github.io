const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,   //吸底模式
    autoplay: true, //自动播放
    theme: '#FADFA3', //主题色
    loop: 'all', //音频循环播放, 可选值: 'all'全部循环, 'one'单曲循环, 'none'不循环
    order: 'list', //音频循环顺序, 可选值: 'list'列表循环, 'random'随机循环
    preload: 'auto', //预加载，可选值: 'none', 'metadata', 'auto'
    volume: 0.7, //默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
    mutex: true, //互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
    listFolded: true, //列表是否默认折叠
    listMaxHeight: 90, //列表最大高度
    lrcType: 3, //歌词传递方式
    audio: [
	{
        name: '前前世世',
        artist: 'RADWIMPS',
        url: '/dist/music/前前世世 - RADWIMPS.mp3',
        cover: '/dist/music/yourname.jpg',
        lrc: '/dist/music/yourname.lrc',
        
      },
	  {
        name: '夢灯籠',
        artist: 'RADWIMPS',
        url: '/dist/music/夢灯籠.mp3',
        cover: 'dist/music/yourname.jpg',
        lrc: '/dist/music/夢灯籠.lrc'
      },
    ]
});