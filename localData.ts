export interface Component {
  _id: string;
  name: string;
  projectName: string;
  code: string;
  isFavorite: boolean;
  createdAt: string;
}

export interface Project {
  _id: string;
  nextAuthId: string;
  name: string;
  icon: string;
  createdAt: string;
  components: Component[];
}

export const AllprojectsData: Project[] = [
  {
    _id: "1",
    nextAuthId: "",
    name: "Forms",
    icon: "Category icon",
    createdAt: "2022-01-01T00:00:00.000Z",
    components: [
      {
      _id: "12",
        name: "Form 1",
        projectName: "Forms",
        code: "<div className='bg-red-100 m-4 w-1/2 px-4 py-4 rounded'>\n        <h1 className='text-lg font-bold text-red-400'>Hello, Tailwind</h1>\n        <p className='text-sm  text-slate-500'>Edit this code to see live changes</p>\n    </div>",
        isFavorite: false,
        createdAt: "2022-01-01T00:00:00.000Z",
      },
      {
        _id: "12",
        name: "Form 2",
        projectName: "Forms",
        code: "",
        isFavorite: false,
        createdAt: "2022-01-01T00:00:00.000Z",
      },
      {
        _id: "14",
        name: "Form 3",
        projectName: "Forms",
        code: "",
        isFavorite: true,
        createdAt: "2022-01-01T00:00:00.000Z",
      },
    ],
  },
  {
    _id: "2",
    nextAuthId: "",
    name: "Buttons",
    icon: "RectangleIcon",
    createdAt: "2022-01-01T00:00:00.000Z",
    components: [
      {
        _id: "21",
        name: "Button 1",
        projectName: "Buttons",
        code: "<button className='bg-red-300 hover:bg-red-400 transition m-4 w-1/2 px-4 py-4 rounded'>Hover</button>",
        isFavorite: true,
        createdAt: "2022-01-01T00:00:00.000Z",
      },
      {
        _id: "23",
        name: "Button 2 ",
        projectName: "Buttons",
        code: "<button className='bg-red-100 m-4 w-1/2 px-4 py-4 rounded'>\n        <h1 className='text-lg font-bold text-red-400'>Button</h1>\n        <p className='text-sm  text-slate-500'>Edit this code to see live changes</p>\n    </button>",
        isFavorite: false,
        createdAt: "2022-01-01T00:00:00.000Z",
      },
      {
        _id: "24",
        name: "Button 3",
        projectName: "Buttons",
        code: "<button className='bg-red-100 m-4 w-1/2 px-4 py-4 rounded'>\n        <h1 className='text-lg font-bold text-red-400'>Button</h1>\n        <p className='text-sm  text-slate-500'>Edit this code to see live changes</p>\n    </button>",
        isFavorite: true,
        createdAt: "2022-01-01T00:00:00.000Z",
      },
    ],
  },
];
