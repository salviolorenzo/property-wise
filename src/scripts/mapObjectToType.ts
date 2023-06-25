import { writeFile } from 'fs';

const PrimitiveTypes = new Set([
  'string',
  'number',
  'boolean',
  'null',
  ' undefined',
]);
const typesToMakeAny = new Set(['null', ' undefined']);

export const mapObjectToType = (object: unknown) => {
  if (!object || object === 'any') return 'any';

  if (Array.isArray(object)) {
    const firstType = typeof object[0];

    if (object.every((val) => typeof val === firstType)) {
      if (firstType === 'object') {
        const nestedType = JSON.stringify(mapObjectToType(object[0]));
        return `${nestedType}[]`;
      } else {
        return `${firstType}[]`;
      }
    }

    return object.map((el: unknown) => {
      return mapObjectToType(el);
    });
  } else if (PrimitiveTypes.has(typeof object)) {
    if (typesToMakeAny.has(typeof object)) {
      return 'any';
    }
    if (
      typeof object === 'string' &&
      (object.includes('[]') ||
        object.includes('"') ||
        PrimitiveTypes.has(object))
    )
      return object;
    return typeof object;
  }

  return Object.fromEntries(
    Object.entries(object as Record<string, unknown>).map(
      ([key, value]: [string, unknown]) => [key, mapObjectToType(value)],
    ),
  );
};

const testObject = {
  data: {
    home_search: {
      __typename: 'SearchHomeResult',
      results: [
        {
          __typename: 'SearchHome',
          property_id: '9618801150',
          listing_id: '2957051327',
          photos: [
            {
              __typename: 'HomePhoto',
              href: 'https://ap.rdcpix.com/3fa6f3db7689b3dd56e50f666170a601l-m3254976984s.jpg',
              tags: [
                {
                  __typename: 'Tag',
                  label: 'porch',
                  probability: 0.9203906655311584,
                },
                {
                  __typename: 'Tag',
                  label: 'porch',
                  probability: 0.969860851764679,
                },
              ],
            },
            {
              __typename: 'HomePhoto',
              href: 'https://ap.rdcpix.com/3fa6f3db7689b3dd56e50f666170a601l-m3890933913s.jpg',
              tags: [
                {
                  __typename: 'Tag',
                  label: 'unknown',
                  probability: 0.9984793066978455,
                },
                {
                  __typename: 'Tag',
                  label: 'porch',
                  probability: 0.9393743276596069,
                },
                {
                  __typename: 'Tag',
                  label: 'porch',
                  probability: 0.9998455047607422,
                },
              ],
            },
            {
              __typename: 'HomePhoto',
              href: 'https://ap.rdcpix.com/3fa6f3db7689b3dd56e50f666170a601l-m3387225311s.jpg',
              tags: [
                {
                  __typename: 'Tag',
                  label: 'unknown',
                  probability: 0.6366410851478577,
                },
              ],
            },
            {
              __typename: 'HomePhoto',
              href: 'https://ap.rdcpix.com/3fa6f3db7689b3dd56e50f666170a601l-m532874116s.jpg',
              tags: [
                {
                  __typename: 'Tag',
                  label: 'unknown',
                  probability: 0.9999178647994995,
                },
              ],
            },
            {
              __typename: 'HomePhoto',
              href: 'https://ap.rdcpix.com/3fa6f3db7689b3dd56e50f666170a601l-m3813948625s.jpg',
              tags: [
                {
                  __typename: 'Tag',
                  label: 'kitchen',
                  probability: 0.9998811483383179,
                },
              ],
            },
            {
              __typename: 'HomePhoto',
              href: 'https://ap.rdcpix.com/3fa6f3db7689b3dd56e50f666170a601l-m1029930990s.jpg',
              tags: [
                {
                  __typename: 'Tag',
                  label: 'kitchen',
                  probability: 0.9944590330123901,
                },
              ],
            },
            {
              __typename: 'HomePhoto',
              href: 'https://ap.rdcpix.com/3fa6f3db7689b3dd56e50f666170a601l-m2556263842s.jpg',
              tags: [
                {
                  __typename: 'Tag',
                  label: 'laundry_room',
                  probability: 0.7721894979476929,
                },
              ],
            },
            {
              __typename: 'HomePhoto',
              href: 'https://ap.rdcpix.com/3fa6f3db7689b3dd56e50f666170a601l-m538864993s.jpg',
              tags: [
                {
                  __typename: 'Tag',
                  label: 'kitchen',
                  probability: 0.9999207258224487,
                },
              ],
            },
            {
              __typename: 'HomePhoto',
              href: 'https://ap.rdcpix.com/3fa6f3db7689b3dd56e50f666170a601l-m2536260496s.jpg',
              tags: [
                {
                  __typename: 'Tag',
                  label: 'unknown',
                  probability: 0.9999200105667114,
                },
              ],
            },
            {
              __typename: 'HomePhoto',
              href: 'https://ap.rdcpix.com/3fa6f3db7689b3dd56e50f666170a601l-m1034144212s.jpg',
              tags: [
                {
                  __typename: 'Tag',
                  label: 'unknown',
                  probability: 0.9996249675750732,
                },
              ],
            },
            {
              __typename: 'HomePhoto',
              href: 'https://ap.rdcpix.com/3fa6f3db7689b3dd56e50f666170a601l-m1960073574s.jpg',
              tags: [
                {
                  __typename: 'Tag',
                  label: 'unknown',
                  probability: 0.8311308026313782,
                },
              ],
            },
            {
              __typename: 'HomePhoto',
              href: 'https://ap.rdcpix.com/3fa6f3db7689b3dd56e50f666170a601l-m298796916s.jpg',
              tags: [
                {
                  __typename: 'Tag',
                  label: 'unknown',
                  probability: 0.9971998929977417,
                },
              ],
            },
            {
              __typename: 'HomePhoto',
              href: 'https://ap.rdcpix.com/3fa6f3db7689b3dd56e50f666170a601l-m3382159075s.jpg',
              tags: [
                {
                  __typename: 'Tag',
                  label: 'bathroom',
                  probability: 0.9999961853027344,
                },
              ],
            },
            {
              __typename: 'HomePhoto',
              href: 'https://ap.rdcpix.com/3fa6f3db7689b3dd56e50f666170a601l-m4138336132s.jpg',
              tags: [
                {
                  __typename: 'Tag',
                  label: 'bathroom',
                  probability: 1,
                },
              ],
            },
          ],
        },
      ],
    },
  },
};

const stringifyAndClean = (object: unknown) => {
  return JSON.stringify(mapObjectToType(object))
    .replace(/\"/g, '')
    .replace(/,/g, ';')
    .replace(/\};\{/g, '},{')
    .replace(/\\/g, '');
};

const output = `export type NewType = ${stringifyAndClean(
  mapObjectToType(testObject),
)}`;

console.log(output);

writeFile('./output.ts', output, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('succesfully wrote to file');
  }
});

// const str1 =
//   '{__typename:string;type:string;amount:string;display_name:string}[]';
// const str2 = 'any';

// console.log(JSON.parse(str2));
