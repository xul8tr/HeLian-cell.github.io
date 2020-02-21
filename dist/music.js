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
        name: '君の名は。',
        artist: '赫连',
        url: '/dist/music/君の名は.mp3',
        cover: '/dist/music/君の名は.jpg',
        lrc: '/dist/music/君の名は.lrc'
  
      },

  
  
  {
        name: '夢灯籠',
        artist: 'RADWIMPS',
        url: '/dist/music/夢灯籠.mp3',
        cover: '/dist/music/yourname.jpg',
        lrc: '/dist/music/夢灯籠.lrc',
      },
      
  {
        name: '成都',
        artist: '赵雷',
        url: '/dist/music/成都.mp3',
        cover: '/dist/music/成都.jpg',
        lrc: '/dist/music/成都.lrc',
      },

  {
        name: '绕圈',
        artist: 'LeeAlive / 盛哲',
        url: 'http://music.163.com/song/media/outer/url?id=536623303.mp3',
        cover: 'http://p2.music.126.net/CYmpd6aNcJ3juYSXiRUAXA==/109951163142450769.jpg?param=130y130',
        lrc: '/dist/music/绕圈.lrc',
      },
      
  {
        name: '藏',
        artist: '徐梦圆 / 双笙',
        url: 'http://music.163.com/song/media/outer/url?id=534540498.mp3',
        cover: 'http://p1.music.126.net/9cySfhHshoKksSkAxwVVqw==/109951163175751210.jpg?param=130y130',
        lrc: '/dist/music/藏.lrc',
      },

  
  {
        name: '飘向北方',
        artist: '那吾克热-NW / 尤长靖',
        url: 'http://music.163.com/song/media/outer/url?id=1308818967.mp3',
        cover: 'http://p1.music.126.net/D-mpVLLwMrA-hPu0QPYUNQ==/109951163551410648.jpg?param=130y130',
        lrc: '/dist/music/飘向北方.lrc',
      },
  
  
  {
        name: 'Cold',
        artist: 'NEFFEX',
        url: 'http://music.163.com/song/media/outer/url?id=1353212443.mp3',
        cover: 'http://p2.music.126.net/Cj-fQ7sex4lbPUDEU5poZA==/109951163940993674.jpg?param=130y130',
        lrc: '/dist/music/Cold.lrc',
      },


  {
      name: '起风了',
      artist: '买辣椒也用券',
      url: '/dist/music/起风了.mp3',
      cover: 'http://p2.music.126.net/c0nzSObvxF_DftayAJjXsw==/109951162864860506.jpg?param=130y130',
      lrc: '/dist/music/起风了.lrc',

    },
    
    
  
    
    ]
});