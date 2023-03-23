import { SiOpenaigym } from "react-icons/si";
import React from "react";

import { loadPTs } from "../../variables/admin/professors";
import { getAllPackage } from "../../variables/admin/courses";
import { loadCenters } from "../../variables/admin/centers";
import axios from "axios";

export const links = [
  {
    name: "Home",
    path: "/user/home",
  },
  {
    name: "About",
    path: "/user/about",
  },
  {
    name: "Plans",
    path: "/user/plans",
  },
  {
    name: "Trainers",
    path: "/user/trainers",
  },
  {
    name: "My Profile",
    path: "/user/profile",
  },
  {
    name: "My Schedule",
    path: "/user/Schedule",
  },
];

export const getPackage = async () => {
  try {
    const packageData = await getAllPackage();
    console.log(packageData);
    return packageData;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getAllCenter = async () => {
  try {
    const center = await loadCenters();
    return center;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const values = [
  {
    id: 1,
    icon: <SiOpenaigym />,
    title: "Value One",
    desc: "Have a workout routine that's right for you.",
  },
  {
    id: 2,
    icon: <SiOpenaigym />,
    title: "Value Two",
    desc: "We have knowledgeable experts in bodybuilding and nutrition.",
  },
  {
    id: 3,
    icon: <SiOpenaigym />,
    title: "Value Three",
    desc: "The ability to achieve high results.",
  },
  {
    id: 4,
    icon: <SiOpenaigym />,
    title: "Value Four",
    desc: "Committed to performance when exercising.",
  },
];

export const faqs = [
  {
    id: 1,
    question: "How often should I exercise?",
    answer:
      "Each week adults need 150 minutes of moderate-intensity physical activity and 2 days of muscle strengthening activity, according to the current Physical Activity Guidelines for Americans. ",
  },
  {
    id: 2,
    question: "What time of day is best to work out?",
    answer:
      "Between 2 p.m. and 6 p.m., your body temperature is at its highest. This may mean you'll be exercising during the window of time your body is most ready, potentially making it the most effective time of day to work out.",
  },
  {
    id: 3,
    question: "How long should my workouts be?",
    answer:
      "The American Heart Association recommends 75-150 minutes of aerobic activity, as well as two strength-training sessions, per week.",
  },
  {
    id: 4,
    question: "Do I need to warm up before my workouts?",
    answer:
      "Warm up properly before exercising to prevent injury and make your workouts more effective. This warm-up routine should take at least 6 minutes. Warm up for longer if you feel the need.",
  },
  {
    id: 5,
    question: "Should I do strength training, cardio or both?",
    answer:
      "If your main goal is weight loss, you want to burn calories and build muscle mass. So, for optimal benefits, you should incorporate both cardio and strength training into your exercise routine.",
  },
  {
    id: 6,
    question: "Should I lift weights for strength training?",
    answer:
      "Weight training is an excellent way to build muscle mass and make your muscles stronger. It can also keep your metabolism chugging, strengthen your bones and joints, improve your muscle tone, help you burn more calories, and keep you healthier as you age.",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Diana Ayi",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.",
    job: "Student",
    avatar: require("./images/avatar1.jpg"),
  },
  {
    id: 2,
    name: "Daniel Vinyo",
    quote:
      "Harum quaerat hic consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum this and that odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
    job: "Software Egineer",
    avatar: require("./images/avatar2.jpg"),
  },
  {
    id: 3,
    name: "Edem Quist",
    quote:
      "Quaerat hic praesentium consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
    job: "University Lecturer",
    avatar: require("./images/avatar3.jpg"),
  },
  {
    id: 4,
    name: "Grace Lavoe",
    quote:
      "Cupiditate deleniti sint consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
    job: "Talking Parrot",
    avatar: require("./images/avatar4.jpg"),
  },
  {
    id: 5,
    name: "Nana Yaa Dankwa",
    quote:
      "Maxime minima cumque sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.",
    job: "Pharmacist",
    avatar: require("./images/avatar5.jpg"),
  },
];

export const getTrainers = async () => {
  try {
    const centerData = await loadPTs();
    const trainers = centerData.map((trainer) => ({
      id: trainer.id,
      image: trainer.img,
      name: trainer.name,
      centerName: trainer.center,
      rating: trainer.rating ? trainer.rating : "Not yet",
      description: trainer.description,
    }));
    return trainers;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const checkTrainers = async (id) => {
  try {
    const respone = await axios.get(
      `https://gachateambe.herokuapp.com/api/trainee-packages?traineeId=${id}`
    );
    const data = respone.data.traineePackages;
    const trainee = data.map((trainer) => ({
      packCurrent: trainer.trainee.currentTraineePackageId,
      startDate: trainer.startDate,
      endDate: trainer.endDate,
      remainDay: trainer.remainDay,
      slot: trainer.mainSlot.slotTime,
    }));
    return trainee;
  } catch (error) {
    console.error(error);
    return [];
  }
};
