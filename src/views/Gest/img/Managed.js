import React from 'react';
import 'antd/dist/antd.css';
import { Icon } from 'antd';

const ManagedSvg = () => (
    <svg height="60" viewBox="0 0 496 496" width="60"><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="247.994645" x2="247.994645" y1="496" y2="0"><stop offset="0" stop-color="#9f2fff"/><stop offset="1" stop-color="#0bb1d3"/></linearGradient><path d="m384 312h16v144h-16zm16-32h-16v16h16zm32 40h-16v-88h-64v-51.71875l-16-10.664062v30.382812c0 17.648438-14.351562 32-32 32s-32-14.351562-32-32v-30.382812l-16 10.664062v48.40625l32 32v177.351562l-1.976562 2.257813c-2.742188 3.152344-6.023438 8.421875-6.023438 15.703125 0 13.230469 10.765625 24 24 24 13.230469 0 24-10.769531 24-24 0-7.28125-3.28125-12.550781-6.023438-15.703125l-1.976562-2.257813v-177.351562l18.34375-18.34375 11.3125 11.3125-13.65625 13.65625v164.902344c5.175781 6.929687 8 15.265625 8 23.785156 0 22.054688-17.945312 40-40 40s-40-17.945312-40-40c0-8.519531 2.824219-16.855469 8-23.785156v-164.902344l-32-32v-63.59375l29.574219-19.71875h18.425781v48c0 8.824219 7.175781 16 16 16s16-7.175781 16-16v-48h18.421875l29.578125 19.71875v44.28125h56c15.902344 0 31.113281-6.800781 41.726562-18.65625 10.761719-12.015625 15.703126-27.550781 13.914063-43.75-2.722656-24.664062-22.433594-45.242188-46.863281-48.929688-23.59375-3.535156-46.304688 7.503907-57.785156 28.214844l-13.992188-7.757812c8.765625-15.816406 22.671875-27.105469 38.816406-32.824219-1.960937-42.394531-36.953125-76.296875-79.816406-76.296875-24.183594 0-46.960938 11.152344-62.113281 29.910156 2.90625 4.777344 5.472656 9.824219 7.570312 15.1875l-14.90625 5.824219c-12.078125-30.9375-41.34375-50.921875-74.550781-50.921875-44.113281 0-80 35.886719-80 80 0 7.414062 1.007812 14.753906 3.007812 21.824219l-15.398437 4.351562c-1.601563-5.664062-2.625-11.488281-3.160156-17.367187-9.035157-1.449219-17.707031-.738282-26.296875 2.40625-23.511719 8.601562-38.488282 29.640625-38.144532 53.601562.429688 30.429688 25.550782 55.183594 55.992188 55.183594h72v128h48v-152c0-10.414062-6.710938-19.214844-16-22.527344v94.527344h-16v-94.527344c-9.289062 3.3125-16 12.113282-16 22.527344v8h-16v-8c0-22.054688 17.945312-40 40-40s40 17.945312 40 40v168h-16v86.113281l8.640625 17.269531-10.875 32.617188h-43.527344l-10.871093-32.617188 8.632812-17.269531v-86.113281h-16v-128h-48v88h-16v-88.480469c-35.441406-3.984375-63.472656-34.046875-63.9921875-70.472656-.4414065-30.863281 18.6562495-57.886719 48.6484375-68.847656 10.269531-3.765625 20.902344-4.933594 31.71875-3.613281 3.816406-49.472657 45.199219-88.585938 95.625-88.585938 28.351562 0 54.261719 12.183594 72.101562 32.558594 18.128907-20.527344 44.28125-32.558594 71.898438-32.558594 50.449219 0 91.847656 39.144531 95.625 88.648438 6.375-.738282 12.910156-.792969 19.542969.199218 31.480469 4.753906 56.871093 31.25 60.382812 62.992188 2.257813 20.480468-4.261719 40.960937-17.902343 56.183594-11.855469 13.234374-28.167969 21.550781-45.648438 23.511718zm-256 129.886719v-89.886719h-16v89.886719l-7.359375 14.730469 5.125 15.382812h20.472656l5.128907-15.382812zm256-113.886719h-16v16h16zm-65.992188-253.71875 15.335938-4.5625c-8.007812-26.917969-33.230469-45.71875-61.34375-45.71875v16c21.085938 0 40.007812 14.097656 46.007812 34.28125zm-206.007812 245.71875h16v-16h-16zm16-48h-16v16h16zm120 184h16v-16h-16zm120-80h16v-16h-16zm-320 72h16v-144h-16zm16-176h-16v16h16zm-32 56h-16v16h16zm-16 48h16v-16h-16zm0 0" fill="url(#a)"/></svg>
  );
  const Managed = props => <Icon component={ManagedSvg} {...props} />;

  export default Managed;