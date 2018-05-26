import '@polymer/iron-iconset-svg/iron-iconset-svg.js';
const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `<iron-iconset-svg name="kwc-warning-icons" size="64">
    <svg>
        <defs>
            <g id="error">
                <path d="m63.8415,32.06674c0,-17.54673 -14.2245,-31.77476 -31.77476,-31.77476c-17.54673,0 -31.77476,14.22803 -31.77476,31.77476c0,17.54673 14.22803,31.77476 31.77476,31.77476c17.55026,0 31.77476,-14.22803 31.77476,-31.77476m-26.50015,-12.03204l-3.05744,14.97297c-0.31422,1.86412 -1.81469,2.94093 -3.80591,2.69379c-2.04418,-0.2542 -3.26927,-1.66994 -3.11746,-3.6082l0.76259,-15.17774c0.11298,-1.50047 0.78025,-2.33721 1.32042,-2.78206c0.91088,-0.74847 2.19952,-1.02385 3.83062,-0.82261c1.59933,0.20124 2.76793,0.78025 3.46345,1.72996c0.4166,0.56135 0.85792,1.53931 0.60372,2.99389m-8.43796,30.28841c-2.84208,-0.35658 -4.33196,-2.24895 -3.97891,-5.06278c0.35305,-2.82795 2.3125,-4.36726 5.11221,-4.01774c2.81383,0.35305 4.279,2.27719 3.91889,5.14751c-0.34952,2.81383 -2.24189,4.28253 -5.05219,3.93301z" transform="rotate(-15 32.06674194335943,32.066741943359396)"></path>
            </g>
        </defs>
    </svg>
</iron-iconset-svg>`;

document.head.appendChild($_documentContainer.content);

/*
`kwc-warning-icons`
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
;
