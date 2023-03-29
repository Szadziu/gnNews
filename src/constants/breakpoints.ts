const breakpoints = {
    xsmall: 480,
    small: 576,
    medium: 768,
    large: 992,
    xlarge: 1200,
};

export const mediaQueries = {
    xsmall: `@media (max-width: ${breakpoints.xsmall}px)`,
    small: `@media (max-width: ${breakpoints.small}px)`,
    medium: `@media (max-width: ${breakpoints.medium}px)`,
    large: `@media (max-width: ${breakpoints.large}px)`,
    xlarge: `@media (max-width: ${breakpoints.xlarge}px)`,
};
