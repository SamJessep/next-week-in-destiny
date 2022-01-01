<template>
   <div class="spinnerContainer fullPage cover">
      <div class="spinnerOverlay">
         <div class="spinnerInner">
            <div class="spinner">
               <svg class="outer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93.12 107.52">
                  <polygon class="step step0" points="1.4993555928857774,25.70919947248558 16.29799608155895,34.255527834132636 45.040645234973454,17.657660176081663 45.040645234973454,0.5799999237060547 1.4993555928857774,25.70919947248558 "></polygon>
                  <polygon class="step step1" points="14.798639163130133,70.04514361060887 14.798639163130133,36.84941215063213 0,28.303083788985077 0,78.57647357327482 14.798639163130133,70.04514361060887 "></polygon>
                  <polygon class="step step2" points="45.040645234973454,89.22190104230344 16.29799608155895,72.63902792710837 1.4993555928857774,81.18535821681803 45.040645234973454,106.31455390947235 45.040645234973454,89.22190104230344 "></polygon>
                  <polygon class="step step3" points="91.58064449628182,81.18535821681803 76.76700789820188,72.63902792710837 48.03935328764328,89.22190104230344 48.03935328764328,106.31455390947235 91.58064449628182,81.18535821681803 "></polygon>
                  <polygon class="step step4" points="78.2663619245368,36.84941215063213 78.2663619245368,70.04514361060887 93.07999852261673,78.57647357327482 93.07999852261673,28.303083788985077 78.2663619245368,36.84941215063213 "></polygon>
                  <polygon class="step step5" points="48.03935328764328,0.5799999237060547 48.03935328764328,17.657660176081663 76.76700789820188,34.255527834132636 91.58064449628182,25.70919947248558 48.03935328764328,0.5799999237060547 "></polygon>
               </svg>
               <svg class="inner" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93.12 107.52">
                  <polygon class="step step5" points="32.685951708002904,43.71646161198646 45.040645234973454,36.579529659851914 45.040645234973454,21.181146379706433 19.34168583473388,36.00977173645447 32.685951708002904,43.71646161198646 "></polygon>
                  <polygon class="step step4" points="31.18659575360539,60.58420983275505 31.18659575360539,46.31034592848596 17.842331808398967,38.61865252387247 17.842331808398967,68.27590709349374 31.18659575360539,60.58420983275505 "></polygon>
                  <polygon class="step step3" points="45.040645234973454,70.3150261013891 32.685951708002904,63.17809800537975 19.34168583473388,70.88478402478654 45.040645234973454,85.71341323765978 45.040645234973454,70.3150261013891 "></polygon>
                  <polygon class="step step2" points="60.394042958488626,63.17809800537975 48.03935328764328,70.3150261013891 48.03935328764328,85.71341323765978 73.72331428890175,70.88478402478654 60.394042958488626,63.17809800537975 "></polygon>
                  <polygon class="step step1" points="61.89339698482354,46.31034592848596 61.89339698482354,60.58420983275505 75.22266831523666,68.27590709349374 75.22266831523666,38.61865252387247 61.89339698482354,46.31034592848596 "></polygon>
                  <polygon class="step step0" points="48.03935328764328,21.181146379706433 48.03935328764328,36.579529659851914 60.394042958488626,43.71646161198646 73.72331428890175,36.00977173645447 48.03935328764328,21.181146379706433 ">
                  </polygon>
               </svg>
            </div>
         </div>
      </div>
   </div>
</template>

<style lang="scss">
.spinnerContainer
{
  $color-background-alt-3:red;
	position: relative;

	> :not(.spinnerOverlay)
	{
		pointer-events: initial;
	}

	> .spinnerOverlay
	{
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		pointer-events: none;
		background: rgba($color-background-alt-3, 0);
		transition: 0.25s;
		display: flex;
		align-items: center;
		justify-content: center;

		.innerIcon
		{
			position: relative;
			font-size: 2rem;
		}
	}

	&.loading > .spinnerOverlay
	{
		background: rgba($color-background-alt-3, 0);
	}

	.spinnerInner
	{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		opacity: 0;
		animation: fade-in 0.5s 0s forwards;

		&.delayLoadingState
		{
			animation: fade-in 0.5s 1.5s forwards;
		}
	}

	.loadingLabel
	{
		margin-top: 1rem;
	}

	&.fullPage
	{
		position: fixed;
		z-index: 5;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}

	&.cover
	{
		position: absolute;
		z-index: 5;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		pointer-events: none;
	}

	@keyframes fade-in
	{
		0%
		{
			opacity: 0;
		}

		100%
		{
			opacity: 1;
		}
	}
}

.spinner
{
	position: relative;
	width: 4rem;
	height: 4rem;
	pointer-events: none;
	transition: 0.25s;

	&.inline
	{
		width: 2rem;
		height: 2rem;
	}

	svg
	{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	&.on
	{
		opacity: 0.7;
	}

	.step
	{
		fill: #FFF;
	}

	.outer
	{
		@for $i from 0 through 6
		{
			.step#{$i}
			{
				animation: spinner_step#{$i} 4s linear infinite;
			}
		}
	}

	.inner
	{
		@for $i from 0 through 6
		{
			.step#{$i}
			{
				animation: spinner_step#{$i} 2.2s linear infinite;
			}
		}
	}
}

@mixin spinnerAnimation($opaqueStep: 0)
{
	@keyframes spinner_step#{$opaqueStep}
	{
		0%
		{
			opacity: 0;
		}

		@for $i from 0 through 5
		{
			#{calc(($i + 1) / 7) * 100%}
			{
				opacity: if($i == $opaqueStep, 1, 0);
			}
		}

		100%
		{
			opacity: 0;
		}
	}
}

@include spinnerAnimation(0);
@include spinnerAnimation(1);
@include spinnerAnimation(2);
@include spinnerAnimation(3);
@include spinnerAnimation(4);
@include spinnerAnimation(5);
</style>