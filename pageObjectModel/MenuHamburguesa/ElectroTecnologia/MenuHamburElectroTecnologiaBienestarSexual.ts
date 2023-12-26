import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaBienestarSexual extends BasePage {

    readonly BIENESTAR_SEXUAL: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.BIENESTAR_SEXUAL = this.page.locator('//a [@id="menu-item-category-bienestar-sexual"]')
    }

    async clickElectroTecnologiaBienestarSexual(): Promise<void> {
        await this.click(this.BIENESTAR_SEXUAL)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaBienestarSexual(): Promise<void> {
        await this.clickElectroTecnologiaBienestarSexual()
    }
}
