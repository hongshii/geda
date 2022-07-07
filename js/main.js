new fullpage('#fullpage', {
    
	autoScrolling:true,
	scrollHorizontally: true,
    scrollBar:true,
    sectionsColor : ['#ccc', '#fff', '#ccc', '#fff', '#ccc'],
    navigation: true,
	navigationPosition: 'right',
	navigationTooltips: ['GAH소개', '제다큐어','연구개발', '고객지원', '판매병원 찾기'],
	easing: 'easeInOutCubic',
    menu: '.gnb_list',
    anchors:['s1', 's2', 's3', 's4', 's5'],
});
