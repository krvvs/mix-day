"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./ClientFeatured.module.scss";

type Props = {
  children: any;
};

export default function ClientFeatured({ children }: Props) {
  const [scrollIndex, setScrollIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollIndex === 0) {
      scrollRef.current?.scrollTo({ left: 0, behavior: "smooth" });
    } else if (scrollIndex === 1) {
      scrollRef.current?.scrollTo({
        left: scrollRef.current?.scrollWidth,
        behavior: "smooth",
      });
    }
  }, [scrollIndex]);

  const handleScroll = (index: number) => {
    setScrollIndex(index);
  };

  return (
    <div ref={scrollRef} className={styles.featured}>
      {React.Children.map(children, (child, index) => (
        <div
          className={styles.featuredBox}
          onMouseEnter={() => handleScroll(index)}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
