import React from 'react';
import styles from '@/app/Style/Bubble.module.css';

const BubbleCard = () => {
  // When the mouse moves inside a bubble, create a ripple at the cursor’s position.
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const drop = e.currentTarget;
    const rect = drop.getBoundingClientRect();
    // Calculate the position relative to the drop
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Create a ripple element (a span) and set its starting position.
    const ripple = document.createElement('span');
    ripple.className = styles.ripple;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    // Ensure the ripple is large enough to cover the bubble.
    const maxDim = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${maxDim}px`;
    // Offset to center the ripple on the cursor.
    ripple.style.marginLeft = `-${maxDim / 2}px`;
    ripple.style.marginTop = `-${maxDim / 2}px`;

    drop.appendChild(ripple);

    // Remove the ripple element after its animation is finished.
    ripple.addEventListener('animationend', () => {
      ripple.remove();
    });
  };

  return (
    <div className={styles.container}>
      {/* First Bubble */}
      <div
        className={`${styles.drop} ${styles.float}`}
        style={{ '--clr': '#00C2FF' } as React.CSSProperties}
        onMouseMove={handleMouseMove}
      >
        <div className={styles.content}>
          <h2>🤖</h2>
          <p className="text-white">
            Harness the power of AI to drive dynamic, intelligent workflows.
          </p>
          <a href="#">Discover More</a>
        </div>
      </div>

      {/* Second Bubble */}
      <div
        className={`${styles.drop} ${styles.float}`}
        style={{ '--clr': '#2CDB93' } as React.CSSProperties}
        onMouseMove={handleMouseMove}
      >
        <div className={styles.content}>
          <h2>🚀</h2>
          <p className="text-white">
            Accelerate your business with cutting-edge automation and efficiency.
          </p>
          <a href="#">Explore Automation</a>
        </div>
      </div>

      {/* Third Bubble */}
      <div
        className={`${styles.drop} ${styles.float}`}
        style={{ '--clr': '#FF6B6B' } as React.CSSProperties}
        onMouseMove={handleMouseMove}
      >
        <div className={styles.content}>
          <h2>🔄</h2>
          <p className="text-white">
            Streamline complex processes seamlessly with our agentic framework.
          </p>
          <a href="#">Learn How</a>
        </div>
      </div>
    </div>
  );
};

export default BubbleCard;
