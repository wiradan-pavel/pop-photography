import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import formImg from '../../assets/images/form.jpg';
import { lineYellow138Dec } from '../../data/decoration.img';
import { leftRightItemAni, normalListAni } from '../../data/animations.var';

import style from './style.module.scss';

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const submitData = (data) => {
    setIsLoading(true);
    console.log(data);
    setIsLoading(false);
  };

  return (
    <div className={style.wrapperWhite}>
      <div className={style.container}>
        <section className={style.section}>
          <motion.form
            variants={normalListAni}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            onSubmit={handleSubmit((data) => submitData(data))}
            className={style.form}
          >
            <h4 className={style.title}>
              Send us a message
              <img src={lineYellow138Dec} alt="" />
            </h4>
            <div className={style.form__top}>
              <motion.input
                variants={leftRightItemAni}
                {...register('name', { required: true })}
                type="text"
                placeholder="Your Name"
              />
              <motion.input
                variants={leftRightItemAni}
                {...register('email', { required: true })}
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div className={style.form__bottom}>
              <motion.input
                variants={leftRightItemAni}
                className={style.date}
                {...register('date')}
                type="text"
                placeholder="Date"
                onFocus={(e) => (e.target.type = 'date')}
                onBlur={(e) => (e.target.type = 'text')}
              />
              <motion.input
                variants={leftRightItemAni}
                className={style.time}
                {...register('time')}
                type="text"
                placeholder="Time"
                onFocus={(e) => (e.target.type = 'time')}
                onBlur={(e) => (e.target.type = 'text')}
              />
            </div>
            <motion.textarea
              variants={leftRightItemAni}
              placeholder="Message"
              className={style.form__textarea}
              {...register('message', { required: true })}
            ></motion.textarea>
            <motion.button
              variants={leftRightItemAni}
              disabled={isLoading}
              className={style.btn}
              type="submit"
            >
              Send For Confirmation
            </motion.button>
            <div className={style.div__errors}>
              {errors.name && <p>Name is required.</p>}
              {errors.email && <p>Email is required.</p>}
              {errors.message && <p>Message is required.</p>}
            </div>
          </motion.form>
          <div className={style.img}>
            <img src={formImg} alt="" />
          </div>
        </section>
      </div>
    </div>
  );
}
