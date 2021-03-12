
const isAndrois = () => {
    let { userAgent } = navigator;
    let isAndroid     = userAgent.indexOf('Android') > -1 || userAgent.indexOf('Linux') > -1; 
    return isAndroid;
};

const dateFormat = (timestamp = 0, formats) => {
	timestamp = new Date(timestamp);
	var y = timestamp.getFullYear(),
		M = timestamp.getMonth() + 1,
		d = timestamp.getDate(),
		h = timestamp.getHours(),
		m = timestamp.getMinutes(),
		s = timestamp.getSeconds();
	M = M > 9 ? M : '0' + M;
	d = d > 9 ? d : '0' + d;
	h = h > 9 ? h : '0' + h;
	m = m > 9 ? m : '0' + m;
	s = s > 9 ? s : '0' + s;
	return formats.replace(/y|M|d|h|m|s/ig, function (matches) {
		return ({
			y: y,
			M: M,
			d: d,
			h: h,
			m: m,
			s: s
		})[matches];
	});
}

export {
	isAndrois,
	dateFormat
}