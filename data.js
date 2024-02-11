const items = [
  {
    id: 1,
    item: {
      question: 'When can premises wiring be electrically connected to a supply system, considering the PEC provision about the connection to a grounded system in premises wiring?',
      choices: {
        a: 'Only if there is no grounded conductor in the interior system.',
        b: 'Only if the interior system contains a corresponding grounded conductor for each grounded conductor in the supply system.',
        c: 'Always, regardless of the presence of a corresponding grounded conductor.',
        d: 'Only if the connection is through electromagnetic induction.'
      },
      answer: 'B'
    }
  },
  {
    id: 2,
    item: {
      question: 'How should an insulated grounded conductor of 14 mm² or smaller be identified, according to the provided information?',
      choices: {
        a: 'By a continuous green outer finish.',
        b: 'By three continuous white stripes on other than green insulation along its entire length.',
        c: 'By a continuous red outer finish.',
        d: 'By colored tracer threads in the braid.'
      },
      answer: 'B'
    }
  },
  {
    id: 3,
    item: {
      question: 'According to the PEC code, how is an insulated conductor, intended for use as a grounded conductor and contained within a flexible cord, required to be identified?',
      choices: {
        a: 'By a continuous green outer finish.',
        b: 'By three continuous white stripes along its entire length.',
        c: 'By a distinctive white or gray marking at its terminations that encircles the conductor or insulation.',
        d: 'By a white or gray outer finish or methods permitted by PEC code section 4.0.2.3.'
      },
      answer: 'D'
    }
  },
  {
    id: 4,
    item: {
      question: 'How should the insulated grounded conductors in a multiconductor cable be identified, as specified in the PEC code?',
      choices: {
        a: 'By a continuous green outer finish.',
        b: 'By three continuous white stripes on other than green insulation along its entire length.',
        c: 'By a distinctive white or gray marking at its terminations that encircles the conductor or insulation.',
        d: 'By a black outer finish.'
      },
      answer: 'B'
    }
  },
  {
    id: 5,
    item: {
      question: 'What is the identification method allowed for multiconductor flat cables that are 22 mm² or larger, according to the PEC code?',
      choices: {
        a: 'Continuous green outer finish.',
        b: 'External ridge on the grounded conductor.',
        c: 'Distinctive white or gray marking at terminations.',
        d: 'Colored tracer threads in the braid.'
      },
      answer: 'B'
    }
  },
  {
    id: 6,
    item: {
      question: 'How is a conductor for circuits of less than 50 volts required to be grounded, according to the PEC code?',
      choices: {
        a: 'By a continuous green outer finish.',
        b: 'By three continuous red stripes.',
        c: 'By a distinctive white or gray marking at its terminations.',
        d: 'Grounding is required only as specified by PEC code section 2.50.2.1(A).'
      },
      answer: 'D'
    }
  },
  {
    id: 7,
    item: {
      question: 'What color insulation or marking is specified for a conductor for circuits of less than 50 volts, according to the PEC code?',
      choices: {
        a: 'Blue or purple.',
        b: 'White or gray.',
        c: 'Black or brown.',
        d: 'Red or orange.'
      },
      answer: 'B'
    }
  },
  {
    id: 8,
    item: {
      question: 'According to the PEC code, what is the requirement for marking terminals on devices, excluding panelboards, that are intended for connection to more than one side of the circuit?',
      choices: {
        a: 'Terminals should always be color-coded.',
        b: 'Terminals must have a distinctive white or gray marking.',
        c: 'Terminals should have three continuous white stripes.',
        d: 'Marking is not required if the electrical connection is evident.'
      },
      answer: 'D'
    }
  },
  {
    id: 9,
    item: {
      question: 'When is marking of terminals not required on devices, excluding panelboards, according to the PEC code?',
      choices: {
        a: 'Marking is always required.',
        b: 'Marking is not required if the terminals are color-coded.',
        c: 'Marking is not required if the electrical connection to the grounded conductor is evident.',
        d: 'Marking is not required for any devices.'
      },
      answer: 'C'
    }
  },
  {
    id: 10,
    item: {
      question: 'According to the PEC code provision 2.0.1.11, what is the requirement regarding the attachment of grounded conductors to terminals or leads?',
      choices: {
        a: 'Grounded conductors should always be attached to terminals.',
        b: 'Grounded conductors must be attached in a way that reverses the designated polarity.',
        c: 'Grounded conductors should not be attached to any terminal or lead.',
        d: 'Grounded conductors must be attached with designated polarity intact.'
      },
      answer: 'C'
    }
  }
];

module.exports = items;