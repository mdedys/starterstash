type Units = {
  px: string;
  rem: string;
};

export function pxToUnits(px: number, base = 16): Units {
  return {
    px: `${px}px`,
    rem: `${px / base}rem`,
  };
}
