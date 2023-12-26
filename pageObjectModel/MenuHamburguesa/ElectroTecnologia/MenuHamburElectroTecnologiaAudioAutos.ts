import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaAudioAutos extends BasePage {

    readonly AUDIO_AUTOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        // this.AUDIO_AUTOS = this.page.locator('//div[contains(text(),\'Audio para autos\')]')
        this.AUDIO_AUTOS = this.page.locator('//a [@id="menu-item-category-audio-autos"]')
    }

    async clickElectroTecnologiaAudioAutos(): Promise<void> {
        await this.click(this.AUDIO_AUTOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaAudioAutos(): Promise<void> {
        await this.clickElectroTecnologiaAudioAutos()
    }
}
