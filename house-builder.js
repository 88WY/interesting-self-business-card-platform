
var HouseThemes = {
    minimal: { id: 'minimal', name: '简约风', tagline: '浪漫小屋' },
    pixel: { id: 'pixel', name: '像素风', tagline: '方块小屋' }
};

var chThemeAliases = {
    nature: 'minimal',
    business: 'minimal',
    art: 'minimal',
    minimal: 'minimal',
    game: 'pixel',
    pixel: 'pixel'
};

function ch_normalizeTheme(theme) {
    return chThemeAliases[theme] || 'minimal';
}

function buildMinimalHouseSVG(s) {
    var out = '';
    out += '<svg viewBox="0 0 400 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">';
    out += '<defs>' +
        '<linearGradient id="minimal-sky" x1="0%" y1="0%" x2="0%" y2="100%">' +
        '<stop offset="0%" stop-color="#FBD3E8"/>' +
        '<stop offset="55%" stop-color="#FFE9D2"/>' +
        '<stop offset="100%" stop-color="#FFF7E0"/>' +
        '</linearGradient>' +
        '</defs>';
    out += '<rect x="0" y="0" width="400" height="240" fill="url(#minimal-sky)"/>';

    if (s >= 1) {
        out += '<circle cx="338" cy="54" r="28" fill="#FFE7B5" opacity="0.5"/>' +
            '<circle cx="338" cy="54" r="18" fill="#FFD98A" opacity="0.9"/>';
        out += '<g opacity="0.8">' +
            '<ellipse cx="78" cy="44" rx="34" ry="12" fill="#FFFFFF"/>' +
            '<ellipse cx="94" cy="38" rx="22" ry="10" fill="#FFFFFF"/>' +
            '<ellipse cx="252" cy="62" rx="30" ry="11" fill="#FFFFFF"/>' +
            '<ellipse cx="266" cy="56" rx="18" ry="9" fill="#FFFFFF"/>' +
            '</g>';
    }

    out += '<ellipse cx="86" cy="248" rx="110" ry="28" fill="#CDEAC4"/>' +
        '<ellipse cx="330" cy="252" rx="120" ry="30" fill="#C2E3BA"/>' +
        '<rect x="0" y="240" width="400" height="60" fill="#BDE3B8"/>' +
        '<rect x="0" y="240" width="400" height="7" fill="#A8D6A3" opacity="0.7"/>';

    if (s >= 1) {
        out += '<rect x="92" y="228" width="216" height="24" rx="7" fill="#F2E3D4"/>' +
            '<rect x="100" y="232" width="200" height="16" rx="5" fill="#FFF9F0"/>';
    }

    if (s >= 2) {
        out += '<rect x="100" y="128" width="200" height="112" fill="#FFF9F0"/>' +
            '<rect x="96" y="124" width="208" height="10" rx="4" fill="#F2D8C8"/>' +
            '<rect x="100" y="230" width="200" height="10" fill="#F2D8C8"/>' +
            '<line x1="160" y1="128" x2="160" y2="240" stroke="#F7E8DC" stroke-width="2"/>' +
            '<line x1="240" y1="128" x2="240" y2="240" stroke="#F7E8DC" stroke-width="2"/>';

        out += '<g>' +
            '<rect x="116" y="150" width="46" height="48" rx="23" fill="#EBC9B4"/>' +
            '<rect x="121" y="155" width="36" height="43" rx="18" fill="#D9F1F6"/>' +
            '<line x1="139" y1="156" x2="139" y2="197" stroke="#EBC9B4" stroke-width="2"/>' +
            '<line x1="122" y1="177" x2="156" y2="177" stroke="#EBC9B4" stroke-width="2"/>' +
            '<rect x="128" y="198" width="22" height="7" rx="3" fill="#B97A5B"/>' +
            '<circle cx="133" cy="202" r="2" fill="#E87A90"/>' +
            '<circle cx="143" cy="202" r="2" fill="#E8B45C"/>' +
            '</g>';

        out += '<g>' +
            '<rect x="238" y="150" width="46" height="48" rx="23" fill="#EBC9B4"/>' +
            '<rect x="243" y="155" width="36" height="43" rx="18" fill="#D9F1F6"/>' +
            '<line x1="261" y1="156" x2="261" y2="197" stroke="#EBC9B4" stroke-width="2"/>' +
            '<line x1="244" y1="177" x2="278" y2="177" stroke="#EBC9B4" stroke-width="2"/>' +
            '<rect x="250" y="198" width="22" height="7" rx="3" fill="#B97A5B"/>' +
            '<circle cx="255" cy="202" r="2" fill="#E87A90"/>' +
            '<circle cx="265" cy="202" r="2" fill="#E8B45C"/>' +
            '</g>';
    }

    if (s >= 3) {
        out += '<path d="M200 40 Q84 128 78 136 L322 136 Q316 128 200 40 Z" fill="#E88D9B"/>' +
            '<path d="M200 50 L96 136 L304 136 Z" fill="#EEA0AC"/>' +
            '<path d="M200 40 L96 136 L200 136 Z" fill="#D97B8D" opacity="0.85"/>' +
            '<path d="M90 134 Q108 146 126 134 Q144 146 162 134 Q180 146 198 134 Q216 146 234 134 Q252 146 270 134 Q288 146 310 134" fill="none" stroke="#FBE7E2" stroke-width="4" stroke-linecap="round"/>';

        out += '<path d="M176 178 Q176 160 200 160 Q224 160 224 178 L224 236 L176 236 Z" fill="#C0916A"/>' +
            '<path d="M181 180 Q181 167 200 167 Q219 167 219 180 L219 234 L181 234 Z" fill="#A97450"/>' +
            '<path d="M198 202 C194 196 187 198 187 204 C187 212 198 217 198 217 C198 217 209 212 209 204 C209 198 202 196 198 202 Z" fill="#E87A90"/>' +
            '<circle cx="215" cy="208" r="3" fill="#F6C85F"/>';
    }

    if (s >= 4) {
        out += '<rect x="276" y="66" width="24" height="56" rx="3" fill="#E7D5C8"/>' +
            '<rect x="272" y="60" width="32" height="11" rx="3" fill="#D5BFAF"/>' +
            '<g opacity="0.6">' +
            '<ellipse cx="288" cy="50" rx="10" ry="6" fill="#F5E6EA"><animate attributeName="cy" values="50;36;22" dur="3s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.6;0.4;0.1" dur="3s" repeatCount="indefinite"/></ellipse>' +
            '<ellipse cx="296" cy="42" rx="7" ry="4" fill="#F5E6EA"><animate attributeName="cy" values="42;28;14" dur="3s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.5;0.3;0" dur="3s" repeatCount="indefinite"/></ellipse>' +
            '</g>';

        out += '<g fill="#F7A8B8">' +
            '<circle cx="118" cy="131" r="4"/><circle cx="134" cy="137" r="4"/><circle cx="150" cy="131" r="4"/><circle cx="166" cy="137" r="4"/><circle cx="182" cy="131" r="4"/><circle cx="198" cy="137" r="4"/><circle cx="214" cy="131" r="4"/><circle cx="230" cy="137" r="4"/><circle cx="246" cy="131" r="4"/><circle cx="262" cy="137" r="4"/><circle cx="278" cy="131" r="4"/>' +
            '</g>';
    }

    if (s >= 5) {
        out += '<rect x="46" y="208" width="13" height="44" rx="3" fill="#A97450"/>' +
            '<circle cx="56" cy="194" r="28" fill="#F3C6CF"/>' +
            '<circle cx="42" cy="202" r="19" fill="#F7D7DE"/>' +
            '<circle cx="70" cy="200" r="22" fill="#EAA7B3"/>' +
            '<circle cx="56" cy="188" r="12" fill="#F9E3E7"/>' +
            '<circle cx="50" cy="194" r="5" fill="#F7A8B8"/>';

        out += '<g>' +
            '<circle cx="318" cy="278" r="5" fill="#F48FB1"/>' +
            '<circle cx="334" cy="284" r="5" fill="#FFD54F"/>' +
            '<circle cx="350" cy="277" r="5" fill="#CE93D8"/>' +
            '<circle cx="70" cy="282" r="4" fill="#F48FB1"/>' +
            '<circle cx="84" cy="279" r="4" fill="#FFD54F"/>' +
            '<line x1="318" y1="278" x2="318" y2="293" stroke="#5F9E5B" stroke-width="1.5"/>' +
            '<line x1="334" y1="284" x2="334" y2="296" stroke="#5F9E5B" stroke-width="1.5"/>' +
            '<line x1="350" y1="277" x2="350" y2="293" stroke="#5F9E5B" stroke-width="1.5"/>' +
            '</g>';

        out += '<path d="M200 300 L200 250 L178 242 L222 242 Z" fill="#E8D5B8"/>' +
            '<ellipse cx="200" cy="252" rx="20" ry="7" fill="#F2E6D2"/>' +
            '<ellipse cx="200" cy="266" rx="22" ry="8" fill="#E8D5B8"/>' +
            '<ellipse cx="200" cy="282" rx="24" ry="9" fill="#F2E6D2"/>';
    }

    out += '</svg>';
    return out;
}

function buildPixelHouseSVG(s) {
    function px(x, y, w, h, c) {
        return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>';
    }

    var out = '';
    out += '<svg viewBox="0 0 400 300" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="image-rendering: pixelated;">';
    out += '<defs>' +
        '<linearGradient id="pixel-sky" x1="0%" y1="0%" x2="0%" y2="100%">' +
        '<stop offset="0%" stop-color="#7EC8E8"/>' +
        '<stop offset="70%" stop-color="#CFF3FF"/>' +
        '<stop offset="100%" stop-color="#E7F8C8"/>' +
        '</linearGradient>' +
        '</defs>';
    out += '<rect x="0" y="0" width="400" height="240" fill="url(#pixel-sky)"/>';

    if (s >= 1) {
        out += px(326, 38, 22, 22, '#FFE082') +
            px(330, 42, 14, 14, '#FFEEA8');
        out += '<g fill="#FFFFFF" opacity="0.85">' +
            px(50, 44, 36, 12) + px(64, 36, 24, 8) + px(80, 44, 28, 12) +
            px(230, 58, 40, 12) + px(244, 50, 26, 8) + px(262, 58, 30, 12) +
            '</g>';
    }

    out += px(0, 238, 400, 10, '#6FBF44') +
        px(0, 248, 400, 52, '#8B5A2B') +
        '<g opacity="0.5">' +
        px(30, 248, 12, 8, '#7A4E25') + px(90, 252, 14, 8, '#7A4E25') +
        px(150, 248, 10, 8, '#7A4E25') + px(220, 250, 14, 8, '#7A4E25') +
        px(300, 248, 12, 8, '#7A4E25') + px(360, 252, 12, 8, '#7A4E25') +
        '</g>';

    if (s >= 1) {
        out += px(90, 224, 220, 18, '#A1887F') +
            px(96, 230, 208, 10, '#8F7868') +
            px(104, 218, 192, 10, '#6FBF44') +
            px(108, 222, 184, 6, '#8BC34A');
    }

    if (s >= 2) {
        out += px(98, 124, 204, 112, '#C89B5F') +
            '<g stroke="#A87B45" stroke-width="3">' +
            '<line x1="100" y1="146" x2="300" y2="146"/>' +
            '<line x1="100" y1="168" x2="300" y2="168"/>' +
            '<line x1="100" y1="190" x2="300" y2="190"/>' +
            '<line x1="100" y1="212" x2="300" y2="212"/>' +
            '</g>' +
            px(98, 124, 8, 112, '#8E5E33') +
            px(294, 124, 8, 112, '#8E5E33') +
            px(100, 124, 200, 8, '#B0854C');
    }

    if (s >= 2) {
        out += '<g>' +
            px(112, 148, 46, 46, '#8E5E33') +
            px(116, 152, 38, 38, '#AEE6F2') +
            px(116, 152, 18, 38, '#8EDCF0') +
            px(116, 166, 38, 4, '#8E5E33') +
            px(133, 152, 4, 38, '#8E5E33') +
            '</g>';
        out += '<g>' +
            px(242, 148, 46, 46, '#8E5E33') +
            px(246, 152, 38, 38, '#AEE6F2') +
            px(246, 152, 18, 38, '#8EDCF0') +
            px(246, 166, 38, 4, '#8E5E33') +
            px(263, 152, 4, 38, '#8E5E33') +
            '</g>';
    }

    if (s >= 3) {
        out += px(72, 120, 256, 14, '#5D3E28') +
            px(82, 106, 236, 14, '#6D4C33') +
            px(94, 92, 212, 14, '#77553A') +
            px(106, 78, 188, 14, '#6D4C33') +
            px(118, 64, 164, 14, '#77553A') +
            px(130, 50, 140, 14, '#6D4C33');

        out += px(176, 156, 48, 84, '#6B4426') +
            px(182, 162, 36, 78, '#8B5A2B') +
            px(182, 162, 36, 4, '#7A4E25') +
            px(182, 174, 36, 4, '#7A4E25') +
            px(182, 186, 36, 4, '#7A4E25') +
            px(182, 198, 36, 4, '#7A4E25') +
            px(182, 210, 36, 4, '#7A4E25') +
            px(212, 196, 5, 5, '#B0BEC5') +
            px(196, 164, 20, 14, '#AEE6F2') +
            px(198, 166, 4, 12, '#8E5E33') +
            px(204, 166, 4, 12, '#8E5E33');
    }

    if (s >= 4) {
        out += px(276, 66, 22, 46, '#7C7C7C') +
            px(272, 60, 30, 8, '#6E6E6E') +
            '<g>' + px(282, 54, 6, 8, '#5D3E28') + px(284, 44, 4, 12, '#FF8A50') + px(282, 46, 8, 4, '#FFC94D') + '</g>';

        out += px(200, 34, 4, 18, '#4E342E') +
            px(204, 36, 22, 12, '#66BB6A') +
            px(216, 40, 4, 4, '#FFF176');
    }

    if (s >= 5) {
        out += px(38, 196, 16, 46, '#7A5230') +
            px(30, 170, 38, 30, '#3E9A3E') +
            px(44, 158, 34, 24, '#4CAF50') +
            px(58, 150, 26, 20, '#66BB6A') +
            px(30, 196, 18, 10, '#357A38') +
            px(58, 196, 18, 10, '#357A38');

        out += '<g>' +
            px(314, 276, 8, 8, '#EF5350') + px(318, 280, 4, 6, '#8BC34A') +
            px(330, 280, 8, 8, '#FFEE58') + px(334, 284, 4, 6, '#8BC34A') +
            px(346, 274, 8, 8, '#AB47BC') + px(350, 278, 4, 6, '#8BC34A') +
            px(66, 278, 8, 8, '#FF7043') + px(70, 282, 4, 6, '#8BC34A') +
            px(80, 274, 8, 8, '#FFEE58') + px(84, 278, 4, 6, '#8BC34A') +
            '</g>';

        out += '<g fill="#9E9E9E">' +
            px(192, 244, 16, 12) +
            px(196, 256, 20, 14) +
            px(190, 270, 24, 16) +
            px(194, 286, 28, 14) +
            '</g>';
    }

    out += '</svg>';
    return out;
}

function buildHouseSVG(theme, stage) {
    var key = ch_normalizeTheme(theme);
    var s = stage || 5;
    return key === 'pixel' ? buildPixelHouseSVG(s) : buildMinimalHouseSVG(s);
}
function renderHouse(containerId, theme, stage) {
    var container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = buildHouseSVG(theme, stage);
    }
}


/* 多用户存储：ch_user 只保存当前登录会话，每个账号的内容按 ch_profile_<uid> 独立保存 */
function ch_getSession() {
    try {
        var d = localStorage.getItem('ch_user');
        return d ? JSON.parse(d) : null;
    } catch (e) { return null; }
}

function ch_saveSession(session) {
    try { localStorage.setItem('ch_user', JSON.stringify(session)); }
    catch (e) { console.warn('Failed to save session:', e); }
}

function ch_clearSession() {
    try { localStorage.removeItem('ch_user'); } catch (e) {}
}

function ch_profileKey(uid) {
    return 'ch_profile_' + encodeURIComponent(String(uid || ''));
}

function ch_getProfile() {
    var session = ch_getSession();
    if (!session || !session.uid) return null;
    try {
        var d = localStorage.getItem(ch_profileKey(session.uid));
        var profile = d ? JSON.parse(d) : null;
        if (!profile) return null;
        profile.uid = session.uid;
        profile.name = session.name || profile.name || '';
        profile.phone = session.phone || profile.phone || '';
        profile.isGuest = session.isGuest;
        profile.loginAt = session.loginAt || profile.loginAt;
        return profile;
    } catch (e) { return null; }
}

function ch_saveProfile(profile) {
    var session = ch_getSession();
    if (!session || !session.uid || !profile) return;
    profile.uid = session.uid;
    try { localStorage.setItem(ch_profileKey(session.uid), JSON.stringify(profile)); }
    catch (e) { console.warn('Failed to save profile:', e); }
}

function ch_logout() {
    ch_clearSession();
    window.location.href = 'login.html';
}
