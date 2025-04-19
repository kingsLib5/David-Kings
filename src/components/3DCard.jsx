import { motion } from 'framer-motion'

const Card3D = () => {
  return (
    <div className="transform-perspective-2000">
      <motion.div 
        className="preserve-3d backface-hidden w-64 h-96 rounded-2xl bg-gradient-to-br from-primary-DEFAULT to-secondary-DEFAULT"
        whileHover={{ 
          rotateY: 15,
          rotateX: -10,
          transition: { duration: 0.5 }
        }}
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden p-8 flex flex-col items-center justify-center">
          <h3 className="text-2xl font-bold text-white">Front</h3>
          <p className="text-gray-200 mt-4">Hover to see 3D effect</p>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 backface-hidden transform rotate-y-180 bg-gradient-to-br from-secondary-DEFAULT to-accent-DEFAULT rounded-2xl p-8 flex flex-col items-center justify-center">
          <h3 className="text-2xl font-bold text-white">Back</h3>
          <p className="text-gray-200 mt-4">3D Transform</p>
        </div>
      </motion.div>
    </div>
  )
}

export default Card3D