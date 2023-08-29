import { motion as m } from 'framer-motion'
import { useParams } from 'react-router-dom'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'
import img7 from '../assets/img7.jpg'
import img8 from '../assets/img8.jpg'
import img9 from '../assets/img9.jpg'
import img10 from '../assets/img10.jpg'
import img11 from '../assets/img1.jpg'
import img12 from '../assets/img2.jpg'
import img13 from '../assets/img3.jpg'
import img14 from '../assets/img4.jpg'
import img15 from '../assets/img5.jpg'
import img16 from '../assets/img6.jpg'
import img17 from '../assets/img7.jpg'
import img18 from '../assets/img8.jpg'
import img19 from '../assets/img9.jpg'
import img20 from '../assets/img10.jpg'

function ProjectDetails() {
  const {number} = useParams();

  const projectsData = [
    {
      id: '01',
      imageUrl: img1,
      heading: "Villa BEVERLY",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quas eius labore delectus libero et cumque odit nihil. Hic, sequi? Commodi, nemo veritatis? Magnam, autem. A vitae sit dolorem facilis."
    },
    {
      id: '02',
      imageUrl: img2,
      heading: "Villa EBENE",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum vero distinctio ullam, officia impedit dolorem veniam nostrum libero iusto accusamus ex dicta alias esse hic modi voluptatibus minus aliquam. Illum."
    },
    {
      id: '03',
      imageUrl: img3,
      heading: "Résidences EBENE",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus quasi harum at soluta quam perspiciatis ullam quaerat modi quibusdam, esse dignissimos repudiandae molestias recusandae minus voluptas fugit iusto culpa tenetur."
    },
    {
      id: '04',
      imageUrl: img4,
      heading: "Villa TYCAN",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quas eius labore delectus libero et cumque odit nihil. Hic, sequi? Commodi, nemo veritatis? Magnam, autem. A vitae sit dolorem facilis."
    },
    {
      id: '05',
      imageUrl: img5,
      heading: "Villa PENFIELD",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum vero distinctio ullam, officia impedit dolorem veniam nostrum libero iusto accusamus ex dicta alias esse hic modi voluptatibus minus aliquam. Illum."
    },
    {
      id: '06',
      imageUrl: img6,
      heading: "Villas FAMILY HOUSE",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus quasi harum at soluta quam perspiciatis ullam quaerat modi quibusdam, esse dignissimos repudiandae molestias recusandae minus voluptas fugit iusto culpa tenetur."
    },
    {
      id: '07',
      imageUrl: img7,
      heading: "Villa WD",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quas eius labore delectus libero et cumque odit nihil. Hic, sequi? Commodi, nemo veritatis? Magnam, autem. A vitae sit dolorem facilis."
    },
    {
      id: '08',
      imageUrl: img8,
      heading: "Villa CORAIL",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum vero distinctio ullam, officia impedit dolorem veniam nostrum libero iusto accusamus ex dicta alias esse hic modi voluptatibus minus aliquam. Illum."
    },
    {
      id: '09',
      imageUrl: img9,
      heading: "Mandjaro",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus quasi harum at soluta quam perspiciatis ullam quaerat modi quibusdam, esse dignissimos repudiandae molestias recusandae minus voluptas fugit iusto culpa tenetur."
    },
    {
      id: '10',
      imageUrl: img10,
      heading: "Siège MSC",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quas eius labore delectus libero et cumque odit nihil. Hic, sequi? Commodi, nemo veritatis? Magnam, autem. A vitae sit dolorem facilis."
    },
    {
      id: '11',
      imageUrl: img11,
      heading: "Bureaux MEDLOD SAN PEDRO",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quas eius labore delectus libero et cumque odit nihil. Hic, sequi? Commodi, nemo veritatis? Magnam, autem. A vitae sit dolorem facilis."
    },
    {
      id: '12',
      imageUrl: img12,
      heading: "Life TV",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum vero distinctio ullam, officia impedit dolorem veniam nostrum libero iusto accusamus ex dicta alias esse hic modi voluptatibus minus aliquam. Illum."
    },
    {
      id: '13',
      imageUrl: img13,
      heading: "Immeuble HELIUM",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus quasi harum at soluta quam perspiciatis ullam quaerat modi quibusdam, esse dignissimos repudiandae molestias recusandae minus voluptas fugit iusto culpa tenetur."
    },
    {
      id: '14',
      imageUrl: img14,
      heading: "Abatta HILLS",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quas eius labore delectus libero et cumque odit nihil. Hic, sequi? Commodi, nemo veritatis? Magnam, autem. A vitae sit dolorem facilis."
    },
    {
      id: '15',
      imageUrl: img15,
      heading: "Projet ABATTA",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum vero distinctio ullam, officia impedit dolorem veniam nostrum libero iusto accusamus ex dicta alias esse hic modi voluptatibus minus aliquam. Illum."
    },
    {
      id: '16',
      imageUrl: img16,
      heading: "Immeuble SHEYBANE",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus quasi harum at soluta quam perspiciatis ullam quaerat modi quibusdam, esse dignissimos repudiandae molestias recusandae minus voluptas fugit iusto culpa tenetur."
    },
    {
      id: '17',
      imageUrl: img17,
      heading: "Immeuble ORCHIDEES",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quas eius labore delectus libero et cumque odit nihil. Hic, sequi? Commodi, nemo veritatis? Magnam, autem. A vitae sit dolorem facilis."
    },
    {
      id: '18',
      imageUrl: img18,
      heading: "Immeuble MAGNOLIA",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum vero distinctio ullam, officia impedit dolorem veniam nostrum libero iusto accusamus ex dicta alias esse hic modi voluptatibus minus aliquam. Illum."
    },
    {
      id: '19',
      imageUrl: img19,
      heading: "Immeuble GOLF PALMS",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus quasi harum at soluta quam perspiciatis ullam quaerat modi quibusdam, esse dignissimos repudiandae molestias recusandae minus voluptas fugit iusto culpa tenetur."
    },
    {
      id: '20',
      imageUrl: img20,
      heading: "Sommet UE UA",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quas eius labore delectus libero et cumque odit nihil. Hic, sequi? Commodi, nemo veritatis? Magnam, autem. A vitae sit dolorem facilis."
    }
  ];

  // Find the project based on the provided number
  const selectedProject = projectsData.find(project => project.id === number);

  if (!selectedProject) {
    return (
      <div className="bg-img w-screen h-screen flex justify-center items-center">
        <h1 className='text-8xl montserrat text-white font-semibold py-10'>Project not found</h1>
      </div>
    )
  }
  return (
    <div className='absolute bg-img h-screen flex justify-center items-center'>
      <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.75, ease: 'easeOut' }} className='block md:grid grid-cols-7 gap-8 bg-black w-3/4 shadow-xl mx-auto my-20 p-0 md:p-10'>
        <img src={selectedProject.imageUrl} alt="" className='col-span-3' />
        <div className='col-span-4 text-white'>
          <h1 className='text-xl font-bold pb-4 montserrat'>{selectedProject.heading}</h1>
          <p className='poppins text-sm leading-6'>{selectedProject.text}</p>
        </div>
      </m.div>
    </div>
  )
}

export default ProjectDetails